import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BuscaVagasService } from '../../services/vagas/busca-vagas.service';

@Component({
  selector: 'app-pesquisa-vaga',
  templateUrl: './pesquisa-vaga.component.html',
  styleUrl: './pesquisa-vaga.component.scss'
})
export class PesquisaVagaComponent implements OnInit{

  readonly meninoImg: string = "../../../assets/img/binoculo2.png";
  readonly lupaImg: string = "../../../assets/img/lupa.png";

  vagas: any[] = [];
  tipo: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private buscaVagasService: BuscaVagasService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.tipo = params.get('tipo');
      this.buscarVagas();
    });
  }

  buscarVagas(): void {
    if (this.tipo) {
      this.buscaVagasService.getVagas(this.tipo).subscribe(data => {
        this.vagas = Array.isArray(data) ? data : [];
      });
    } else {
      this.buscaVagasService.getVagas().subscribe(data => {
        this.vagas = Array.isArray(data) ? data : [];
      });
    }
  }
}

