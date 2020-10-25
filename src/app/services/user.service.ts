import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getUsuarios(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.httpClient.get<User[]>(`${environment.URL_API}/user`, {headers: headers})
    .pipe(tap(
      (res: User[]) => {
        return res;
      }
    ));
  }

  getUsuarioById(id: string){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.httpClient.get<User>(`${environment.URL_API}/user/${id}`,{headers: headers})
    .pipe(tap(
      (res: User)=>{
        return res
      }      
    ));
  }

  updateUser(user){
    let params = JSON.stringify(user);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'authorization': this.authService.getToken()
    });
    return this.httpClient.put<User>(`${environment.URL_API}/user/${user._id}`, params, {headers: headers})
    .pipe(tap(
      (res: User) => {
        return res;
      }
    ));
  }

  deleteUser(id: string){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'authorization': this.authService.getToken()
    });
    return this.httpClient.delete<boolean>(`${environment.URL_API}/user/${id}`, {headers: headers})
    .pipe(tap(
      (res: boolean) => {
        return res;
      }
    ));
  }
}
