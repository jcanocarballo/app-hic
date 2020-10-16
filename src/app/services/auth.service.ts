import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {
  authSubject = new BehaviorSubject(false);
  private token: String;

  constructor( private httpClient: HttpClient) { }

  signup(user: UserI): Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${environment.URL_API}/auth/signup`,user).pipe(tap(
      (res: JwtResponseI) => {
        if(res){
          //redirigir al login
          //this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ));
  }

  signin(user: UserI): Observable<JwtResponseI>{
    return this.httpClient.post<JwtResponseI>(`${environment.URL_API}/auth/signin`,user).pipe(tap(
      (res: JwtResponseI) => {
        if(res){
          //guardar token
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      }
    ));
  }

  logout(): void{
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRE_IN');
  }

  private saveToken(token: string, expiresIn: string): void{
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRE_IN', expiresIn);
    this.token = token;
  }

  private getToken(): String{
    if(!this.token){
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }
}
