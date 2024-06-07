import { LoginService } from './../../services/login/login.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  user: { username: string, password: string } = { username: '', password: '' };

  constructor(private loginService: LoginService){}

  validaLogin() {
    const { username, password } = this.user;
    this.loginService.validaLogin(username, password).subscribe(
      response => {
        console.log('Login válido', response);
        
      },
      error => {
        console.error('Erro ao validar login', error);
       
      }
    );
  }
}
