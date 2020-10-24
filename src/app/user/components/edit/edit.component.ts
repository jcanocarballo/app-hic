import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  animations:[
    fadeIn
  ]
})
export class EditComponent implements OnInit{
  
  public title:string;
  public user: User;
  isError: boolean = false;
  mensajeError: string = "";
  status: boolean;
  roles = [
    { name: 'administrador'},
    { name: 'usuario'},
    ];
    defaultOption = null;

  constructor(private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router){
      this.title = "Actualizar datos del usuario."
    }

    ngOnInit(){
      console.log("Componete registrar iniciado...");
      this.obtenerUsuarioById();
    }
    obtenerUsuarioById(){
      this.userService.obtenerUsuarioById('5f7cce7064577d320cca179b').subscribe(res => {
        this.user = res;
      },
      err =>{
        console.log(err);
      }
      )
    }
    guardar(){
      this.mensajeError = '';
      this.isError = false;
      this.userService.updateUser(this.user).subscribe(res => {
        this.status = true;
        console.log(res);
      },
      err => {
        this.isError = true;
        if(err.error.status){
          this.mensajeError = `${err.error.status} : ${err.error.message}`;
        }else{
          this.mensajeError = `El servicio no se ecuentra disponible.`;
        } 
      })      
    }
}