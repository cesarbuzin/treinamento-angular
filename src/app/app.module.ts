import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CidadeComponent } from './componentes/clima/cidade/cidade.component';
import { DadosCidadeComponent } from './componentes/clima/cidade/dados-cidade/dados-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    DadosCidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
