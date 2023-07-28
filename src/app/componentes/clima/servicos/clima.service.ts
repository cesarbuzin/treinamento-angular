import { Cidade } from '../cidade/cidade';
import { DiaCidade } from '../cidade/dia-cidade';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  private readonly API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?q=NOME_CIDADE,br&mode=JSON&appid=${environment.api_key_weather}&units=metric&lang=pt_br`;
  private readonly API_WEATHER = `https://api.openweathermap.org/data/2.5/weather?q=NOME_CIDADE,br&mode=JSON&appid=${environment.api_key_weather}&units=metric&lang=pt_br`;

  constructor(private http: HttpClient) {}

  buscarDadosAtuais(nomeCidade: string): Observable<any> {
    const url = this.API_WEATHER.replace('NOME_CIDADE', nomeCidade);
    return this.http.get(url);
  }

  buscarDadosDiarios(nomeCidade: string): Observable<any> {
    const url = this.API_FORECAST.replace('NOME_CIDADE', nomeCidade);
    return this.http.get(url);
  }
}
