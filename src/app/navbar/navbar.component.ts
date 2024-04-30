import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  readonly logoImg: string = "../../assets/img/logo.png";

  constructor(
    private router: Router
  ) {

  }
}
