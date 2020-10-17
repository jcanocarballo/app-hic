import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';
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
  public user: User;
  
  constructor(private route: ActivatedRoute, 
    private authService: AuthService,
    private router: Router) { 
      this.title = "Registro";
      this.user = new User();
    }

  ngOnInit(): void {
    console.log("Componete registrar iniciado...");
  }

  onSignup(): void{
    this.authService.signup(this.user).subscribe( res =>{
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
