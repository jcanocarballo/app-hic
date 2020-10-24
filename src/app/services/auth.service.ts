import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  authSubject = new BehaviorSubject(false);
  private token: string;
  private identity;

  constructor( public httpClient: HttpClient) { }

  signup(user: User): Observable<User>{
    console.log(user)
    return this.httpClient.post<User>(`${environment.URL_API}/auth/signup`,user).pipe(tap(
      (res: User) => {
        if(res){
          return res;
        }
      }
    ));
  }

  signin(user: User): Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${environment.URL_API}/auth/signin`,user).pipe(tap(
      (res: JwtResponseI) => {
        if(res){
          this.saveToken(res.dataUser, res.dataUser.expiresIn);
        }
      }
    ));
  }

  logout(): void{
    this.token = '';
    localStorage.removeItem('IDENTITY');
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRE_IN');
  }

  private saveToken(user, expiresIn: string): void{
    localStorage.setItem('IDENTITY',JSON.stringify(user));
    localStorage.setItem('ACCESS_TOKEN', user.accessToken);
    localStorage.setItem('EXPIRE_IN', expiresIn);
    this.token = user.accessToken;
  }

  public getToken(): string{
    if(!this.token){
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }

  public getIdentity(){
    let identity = JSON.parse(localStorage.getItem('IDENTITY'))
    if(identity != 'undefined'){
      this.identity = identity;
    }else{
      this.identity = null;
    }
    return this.identity;
  }
}
