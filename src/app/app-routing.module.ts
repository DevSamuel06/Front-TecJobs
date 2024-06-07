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
  { path: "", component: InicialComponent},
  { path: "sobre", component: SobreComponent},
  { path: "vagas", component: VagasComponent},
  { path: "pesquisa", component: PesquisaVagaComponent},
  { path: "fatec", component: FatecComponent},
  { path: "login", component: LoginComponent},
  { path: "detalhamento", component: DetalhamentoComponent},
  { path: "cadastro", component: CadastroVagasComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
