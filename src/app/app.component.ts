import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[
    AuthService
  ]
})
export class AppComponent implements OnInit, DoCheck{
  public title:string;
  public identity;

  constructor(private authService: AuthService,
    private router: Router){
    this.title = "APP";
  }

  ngOnInit(){        
    this.identity = this.authService.getIdentity();
  }

  ngDoCheck(){
    this.identity = this.authService.getIdentity();
  }

  logout(){
    localStorage.clear();
    this.identity = null;
    this.router.navigateByUrl('/');
  }
}
