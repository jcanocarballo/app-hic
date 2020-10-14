import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'mostrar-email',
  template: `
    <h4>{{title}}</h4>
    <span *ngIf="emailContacto">
      <strong>Email de contacto:</strong> {{emailContacto}}
      <button (click)="borrarEmail()">Eliminar email de contacto</button>
    </span>
  `
})
export class MostrarEmailComponent implements DoCheck, OnInit {
  title = 'Mostrar email';
  emailContacto: string;

  ngDoCheck(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngOnInit(){
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail(){
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }
}