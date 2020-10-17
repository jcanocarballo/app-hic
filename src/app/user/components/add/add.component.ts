import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router'
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth.service';
import { fadeIn } from '../../../components/animation';

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
    ]),
    fadeIn
  ]
})
export class AddComponent implements OnInit {
  public status;
  public title;
  public user: User;
  mensajeError: string = "";
  isError: boolean = false;
  mensaje: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService){
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

  addUser(){
    this.authService.signup(this.user).subscribe( res =>{          
      console.log(res);
      if(res._id){
        this.mensaje = "El registro se ha realizado correctamente.";
      }
    },
    err =>{
      this.isError = true;
      if(err.error.status){
        this.mensajeError = `${err.error.status} : ${err.error.message}`;
      }else{
        this.mensajeError = `El servicio no se ecuentra disponible.`;
      }           
    });
  }
}