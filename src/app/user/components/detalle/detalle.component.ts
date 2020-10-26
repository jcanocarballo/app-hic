import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
import { fadeIn } from '../../../components/animation';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'user-detalle',
  templateUrl: './detalle.component.html',
  animations:[
    fadeIn
  ]
})

export class DetalleComponent implements OnInit{
  
  title:string;
  user: User;
  public urlImage: string;

  constructor(private route: ActivatedRoute, 
    private userService: UserService,
    private router: Router){
      this.title = "Detalle del usuario."
      this.urlImage = `${environment.URL_API}/user`;
    }

    ngOnInit(){
      console.log("Componente detalle del usuario iniciado...");   
      this.getUsuario();        
    }

    getUsuario(){
      this.route.params.forEach((params: Params) => {
        let id = params['id'];
        this.userService.getUsuarioById(id).subscribe(res => {
          if(!res._id){
            this.router.navigateByUrl('/usuarios/listado');
          }else{
            this.user = res;
            console.log(this.user);
          }          
        },
        err => {
          this.router.navigateByUrl('/usuarios/listado');
          console.log(err);
        });
      })      
    }
}