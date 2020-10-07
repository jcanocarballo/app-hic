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

  constructor( private authService: AuthService,
    private router: Router ) { 

    }

  ngOnInit(): void {
  }

  onSignin(form):void{
    this.authService.signin(form.value).subscribe( res =>{
      this.router.navigateByUrl('/auth');
    });
  }
}
