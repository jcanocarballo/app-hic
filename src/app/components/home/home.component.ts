import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { fadeIn } from '../animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeIn
  ]
})
export class HomeComponent implements OnInit {

  titulo: string = 'Bievenido a la App';
  identity;

  constructor(private authService: AuthService) {
    this.titulo = 'Bievenido a la App';
   }

  ngOnInit(): void {
    console.log('Componente home iniciado...')
    this.identity = this.authService.getIdentity();
    console.log(this.identity);
  }

}
