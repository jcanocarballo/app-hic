import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-email',
  template: `
    <div>
      <h3>{{title}}</h3>
      <hr/>
      <mostrar-email></mostrar-email>
      <guardar-email></guardar-email> 
      <hr/>
      <h3>{{title}}</h3>
    </div>       
  `
})
export class MainEmailComponent implements OnInit{
  
  title = ' *******************';
  
  ngOnInit(){
    console.log("Componente principal del modulo cargado....");
  }
}