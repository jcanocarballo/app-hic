import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserI } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { 

    }

  ngOnInit(): void {
  }

  onSignup(form): void{
    this.authService.signup(form.value).subscribe( res =>{
      this.router.navigateByUrl('/auth/login');
    });
  }
}
