import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ])
  ]
})
export class AddComponent implements OnInit {
  public status;
  public title;

  constructor(){
    this.title = 'Añadir';
    this.status = 'inactive';
  }

  ngOnInit(){}
  
  cambiarEstado(status){
    if(status == 'inactive'){
      this.status = 'active'
    }else{
      this.status = 'inactive';
    }
  }
}