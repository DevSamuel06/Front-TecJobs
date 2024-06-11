import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroVagaService } from '../../../services/cadastrarVagas/cadastro-vaga.service';

@Component({
  selector: 'app-cadastro-vagas',
  templateUrl: './cadastro-vagas.component.html',
  styleUrl: './cadastro-vagas.component.scss'
})
export class CadastroVagasComponent implements OnInit {

  vagaForm: FormGroup;

  constructor(private fb: FormBuilder, private cadastroVagaService: CadastroVagaService) {
    this.vagaForm = this.fb.group({
      titulo: ['', Validators.required],
      tipo: ['', Validators.required],
      localizacao: ['', Validators.required],
      dataPublicacao: ['', Validators.required],
      requisitos: ['', Validators.required],
      salario: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.vagaForm.valid) {
      this.cadastroVagaService.cadastrarVaga(this.vagaForm.value).subscribe(response => {
        console.log('Vaga cadastrada com sucesso!', response);
      }, error => {
        console.error('Erro ao cadastrar vaga', error);
      });
    }
  }
}
