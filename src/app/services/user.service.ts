import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  obtenerListaUsuarios(){
    return this.httpClient.get<User[]>(`${environment.URL_API}/user`).pipe(tap(
      (res: User[]) => {
        if(res){
          console.log(res);
        }
      }
    ));
  }
}
