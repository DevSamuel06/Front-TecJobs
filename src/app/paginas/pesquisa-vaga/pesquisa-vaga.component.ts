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

  constructor(
    private route: ActivatedRoute,
    private buscaVagasService: BuscaVagasService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tipo = params.get('tipo');
      if (tipo && tipo !== 'outros') {
        this.buscaVagasService.getVagas(tipo).subscribe(vagas => {
          this.vagas = vagas;
        });
      } else {
        this.buscaVagasService.getVagas().subscribe(vagas => {
          this.vagas = vagas;
          console.log("outros tá funcionando")
        });
      }
    });
  }
}

