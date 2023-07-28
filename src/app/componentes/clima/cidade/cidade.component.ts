import { DiaCidade } from './dia-cidade';
import { Cidade } from './cidade';
import { ClimaService } from '../servicos/clima.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { map } from 'rxjs';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css'],
})
export class CidadeComponent implements OnInit {
  cidadeFiltro = '';

  public cidade: Cidade = {
    nome: '',
    descricao: '',
    dataHora: new Date(),
    pais: '',
    diaSemana: '',
    icon:''
  };

  public listDias: DiaCidade[] = [];

  constructor(private climaService: ClimaService) {}

  ngOnInit(): void {}

  atualizarTempo() {
    if (this.cidadeFiltro.trim().length > 0) {
      this.climaService
        .buscarDadosAtuais(this.cidadeFiltro)
        .subscribe((retorno) => {
          this.listDias = [];
          this.cidade.nome = retorno.name;
          this.cidade.descricao = retorno.weather[0].description;
          this.cidade.dataHora = new Date(retorno.dt * 1000);
          this.cidade.pais = retorno.sys.country;
          this.cidade.icon = retorno.weather[0].icon
          this.cidade.diaSemana = [
            'Domingo',
            'Segunda-feira',
            'Terça-feira',
            'Quarta-feira',
            'Quinta-feira',
            'Sexta-feira',
            'Sábado',
          ][new Date(retorno.dt * 1000).getDay()];

          this.climaService
            .buscarDadosDiarios(this.cidadeFiltro)
            .subscribe((retorno) => {
              var lista = retorno.list;

              const dateLimit = new Date(
                this.cidade.dataHora.getFullYear(),
                this.cidade.dataHora.getMonth(),
                this.cidade.dataHora.getDate(),
                0,
                0,
                0
              );
              dateLimit.setDate(dateLimit.getDate()+ 5);

              var mapDays: Map<String, DiaCidade> = new Map();
              for (let day of lista) {
                if (day.dt * 1000 < dateLimit.getTime()) {
                  var diaSemana = [
                    'Domingo',
                    'Segunda-feira',
                    'Terça-feira',
                    'Quarta-feira',
                    'Quinta-feira',
                    'Sexta-feira',
                    'Sábado',
                  ][new Date(day.dt * 1000).getDay()];

                  if (mapDays.has(diaSemana)) {
                    if (
                      mapDays.get(diaSemana)!.tempMinima > day.main.temp_min
                    ) {
                      mapDays.get(diaSemana)!.tempMinima = day.main.temp_min;
                    }
                    if (
                      mapDays.get(diaSemana)!.tempMaxima < day.main.temp_max
                    ) {
                      mapDays.get(diaSemana)!.tempMaxima = day.main.temp_max;
                    }
                  } else {
                    mapDays.set(diaSemana, {
                      descricao: diaSemana,
                      tempMinima: day.main.temp_min,
                      tempMaxima: day.main.temp_max,
                      icon: day.weather[0].icon
                    });
                  }
                }
              }
              this.listDias = Array.from(mapDays.values());
            });
        });
    }
  }
}
