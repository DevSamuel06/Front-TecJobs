import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { VagasComponent } from './paginas/vagas/vagas.component';
import { PesquisaVagaComponent } from './paginas/pesquisa-vaga/pesquisa-vaga.component';
import { FatecComponent } from './paginas/fatec/fatec.component';
import { LoginComponent } from './paginas/login/login.component';
import { DetalhamentoComponent } from './paginas/vagas/detalhamento/detalhamento.component';
import { CadastroVagasComponent } from './paginas/login/cadastro-vagas/cadastro-vagas.component';

const routes: Routes = [
  { path: "", component: InicialComponent, data: { animation: 'fadeInOut' } },
  { path: "sobre", component: SobreComponent, data: { animation: 'fadeInOut' } },
  { path: "vagas", component: VagasComponent, data: { animation: 'fadeInOut' } },
  { path: "pesquisa", component: PesquisaVagaComponent, data: { animation: 'fadeInOut' } },
  { path: "fatec", component: FatecComponent, data: { animation: 'fadeInOut' } },
  { path: "login", component: LoginComponent, data: { animation: 'fadeInOut' } },
  { path: "detalhamento", component: DetalhamentoComponent, data: { animation: 'fadeInOut' } },
  { path: "cadastro", component: CadastroVagasComponent, data: { animation: 'fadeInOut' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
