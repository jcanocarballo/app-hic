import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'user-perfil',
  templateUrl: './perfil.component.html',
  animations:[
    fadeIn
  ]
})

export class PerfilComponent implements OnInit{
  
  title:string;
  user: User;

  constructor(private route: ActivatedRoute, 
    private authService: AuthService,
    private router: Router){
      this.title = "Perfil de usuario."
    }

    ngOnInit(){
      console.log("Componente perfil de usuario iniciado...");
      this.user = this.authService.getIdentity();
      console.log(this.user);
    }
}