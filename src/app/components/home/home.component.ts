import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

}
