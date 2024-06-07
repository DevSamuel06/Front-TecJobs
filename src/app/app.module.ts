import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { VagasComponent } from './paginas/vagas/vagas.component';
import { PesquisaVagaComponent } from './paginas/pesquisa-vaga/pesquisa-vaga.component';
import { FatecComponent } from './paginas/fatec/fatec.component';
import { LoginComponent } from './paginas/login/login.component';
import { CardVagaComponent } from './paginas/vagas/card-vaga/card-vaga.component';
import { DetalhamentoComponent } from './paginas/vagas/detalhamento/detalhamento.component';
import { CadastroVagasComponent } from './paginas/login/cadastro-vagas/cadastro-vagas.component';


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
    CardVagaComponent,
    DetalhamentoComponent,
    CadastroVagasComponent,

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
