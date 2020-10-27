import { from } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate{

  constructor(private router: Router,
    private authService: AuthService){

    }

    canActivate(){
      let identity = this.authService.getIdentity();
      if(identity && identity.role == 'ROL_ADMIN'){
        return true;
      }
      this.router.navigateByUrl('/');
      return false;      
    }
}