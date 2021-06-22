import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../../sistemaAcademia-web/src/app/app-routing.module';
import {CadastrePatientComponent} from '../../sistemaAcademia-web/src/app/cliente/cadastroCliente/cadastro-cliente.component';
import {CadastreComponent} from '../../sistemaAcademia-web/src/app/services/cadastre/cadastre.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrePatientComponent,
    CadastreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
