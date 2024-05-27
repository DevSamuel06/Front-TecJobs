import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './paginas/inicial/inicial.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { VagasComponent } from './paginas/vagas/vagas.component';
import { PesquisaVagaComponent } from './paginas/pesquisa-vaga/pesquisa-vaga.component';
import { FatecComponent } from './paginas/fatec/fatec.component';

const routes: Routes = [
  { path: "", component: InicialComponent, data: { animation: 'fadeInOut' } },
  { path: "sobre", component: SobreComponent, data: { animation: 'fadeInOut' } },
  { path: "vagas", component: VagasComponent, data: { animation: 'fadeInOut' } },
  { path: "pesquisa", component: PesquisaVagaComponent, data: { animation: 'fadeInOut' } },
  { path: "fatec", component: FatecComponent, data: { animation: 'fadeInOut' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
