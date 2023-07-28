import { DiaCidade } from './../dia-cidade';
import { Cidade } from './../cidade';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-dados-cidade",
  templateUrl: "./dados-cidade.component.html",
  styleUrls: ["./dados-cidade.component.css"],
})
export class DadosCidadeComponent implements OnInit {

  @Input() public cidade: Cidade = {
    nome: '',
    descricao: '',
    dataHora: new Date(),
    pais: '',
    diaSemana: '',
    icon:''
  };

  @Input() public listDias: DiaCidade[] = [];

  constructor() {}

  ngOnInit(): void {}
}
