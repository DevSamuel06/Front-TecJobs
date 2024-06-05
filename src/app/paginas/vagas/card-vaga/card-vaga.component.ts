import { Component } from '@angular/core';

@Component({
  selector: 'app-card-vaga',
  templateUrl: './card-vaga.component.html',
  styleUrl: './card-vaga.component.scss'
})
export class CardVagaComponent {

  vagas = [
    { tipo: "Desenvolvedor Front-end", local: "São Paulo, SP", decricao: "Estamos procurando um desenvolvedor front-end talentoso para se juntar à nossa equipe. Você será responsável por criar interfaces de usuário incríveis.", 
    salario: "R$ 6.000 - R$ 8.000", contrato: "CLT" 
    },
    { tipo: "Desenvolvedor Front-end", local: "São Paulo, SP", decricao: "Estamos procurando um desenvolvedor front-end talentoso para se juntar à nossa equipe. Você será responsável por criar interfaces de usuário incríveis.", 
    salario: "R$ 6.000 - R$ 8.000", contrato: "CLT" 
    },
    { tipo: "Desenvolvedor Front-end", local: "São Paulo, SP", decricao: "Estamos procurando um desenvolvedor front-end talentoso para se juntar à nossa equipe. Você será responsável por criar interfaces de usuário incríveis.", 
    salario: "R$ 6.000 - R$ 8.000", contrato: "CLT" 
    },
    { tipo: "Desenvolvedor Front-end", local: "São Paulo, SP", decricao: "Estamos procurando um desenvolvedor front-end talentoso para se juntar à nossa equipe. Você será responsável por criar interfaces de usuário incríveis.", 
    salario: "R$ 6.000 - R$ 8.000", contrato: "CLT" 
    }
  ]

}
