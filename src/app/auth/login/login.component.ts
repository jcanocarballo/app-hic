import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isError: boolean = false;
  mensajeError: string = "";

  constructor( private authService: AuthService,
    private router: Router ) { 

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
