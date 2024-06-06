import { Component } from '@angular/core';

@Component({
  selector: 'app-detalhamento',
  templateUrl: './detalhamento.component.html',
  styleUrl: './detalhamento.component.scss'
})
export class DetalhamentoComponent {
  readonly cifraoImg: string = "../../../../assets/img/cifrao.png";
  readonly localImg: string = "../../../../assets/img/pin-de-localizacao.png";

  vagas = [
    {
      tipo: "Desenvolvedor Front-end", 
      local: "São Paulo, SP", 
      descricao: "Estamos procurando um desenvolvedor front-end talentoso para se juntar à nossa equipe. Você será responsável por criar interfaces de usuário incríveis.",
      beneficio: ["Vale alimentação", "Vale transporte", "PLR"],
      salario: "R$ 6.000 - R$ 8.000", 
      requisitos: ["Conhecimentos em Angular", "typescript" ,  "bootstrap"],
      dataPubli: "26/05/2024"
    }
  ];

}
