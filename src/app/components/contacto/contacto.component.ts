import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  animations: [
    fadeIn
  ]
})
export class ContactoComponent implements OnInit {

  title: string = "Contacto";

  constructor() { }

  ngOnInit(): void {
  }

}
