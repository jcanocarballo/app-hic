import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';
import { fadeIn } from '../../components/animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    fadeIn
  ]
})
export class RegisterComponent implements OnInit {

  public title: string;
  isError: boolean = false;
  mensajeError: string = "";
  
  constructor(private authService: AuthService,
    private router: Router) { 
      this.title = "Registro";
    }

  ngOnInit(): void {
  }

  onSignup(form): void{
    this.authService.signup(form.value).subscribe( res =>{
      this.router.navigateByUrl('/auth/login');
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
