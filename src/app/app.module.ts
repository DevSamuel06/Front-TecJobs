import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { VagasComponent } from './paginas/vagas/vagas.component';
import { PesquisaVagaComponent } from './paginas/pesquisa-vaga/pesquisa-vaga.component';
import { FatecComponent } from './paginas/fatec/fatec.component';
import { LoginComponent } from './paginas/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicialComponent,
    SobreComponent,
    VagasComponent,
    PesquisaVagaComponent,
    FatecComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
