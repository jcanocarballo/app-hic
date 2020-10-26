import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';

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
  public urlImage: string;

  constructor(private authService: AuthService,
    private router: Router){
    this.title = "APP";
    this.urlImage = `${environment.URL_API}/user`;
  }

  ngOnInit(){        
    this.identity = this.authService.getIdentity();
  }

  ngDoCheck(){
    this.identity = this.authService.getIdentity();
  }

  logout(){
    this.authService.logout();
    this.identity = null;
    this.router.navigateByUrl('/auth/login');
  }
}
