import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';
import { fadeIn } from '../../components/animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    fadeIn
  ]
})
export class LoginComponent implements OnInit {

  public title: string;
  isError: boolean = false;
  mensajeError: string = "";

  constructor( private authService: AuthService,
    private router: Router ) { 
      this.title = 'Iniciar Sesión';
    }

  ngOnInit(): void {
  }

  onSignin(form):void{
    this.isError = false;
    this.mensajeError = '';
    this.authService.signin(form.value).subscribe( res =>{
      this.router.navigateByUrl('/auth');
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
