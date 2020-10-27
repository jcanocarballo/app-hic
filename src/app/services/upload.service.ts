import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class UploadService {

  constructor( public httpClient: HttpClient,
    private authService: AuthService) { }

  makeFileRequest(url: string, id, params: Array<string>, files: Array<File>, name: string){
    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      for(let i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name);
      }

      xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
          if(xhr.status == 200){
            resolve(JSON.parse(xhr.response));
          }
          else{
            reject(xhr.response);
          }
        }
      }

      xhr.open('POST', `${environment.URL_API}/${url}/${id}`, true);
      xhr.setRequestHeader('Authorization', this.authService.getToken());
      xhr.send(formData);
    })
  }
}