import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../models/category';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getCategories(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.httpClient.get<Category[]>(`${environment.URL_API}/category`, {headers: headers})
    .pipe(tap(
      (res: Category[]) => {
        return res;
      }
    ));
  }

  getCategoryById(id: string){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.httpClient.get<Category>(`${environment.URL_API}/category/${id}`,{headers: headers})
    .pipe(tap(
      (res: Category)=>{
        return res
      }      
    ));
  }

  addCategory(category){
    let params = JSON.stringify(category);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'authorization': this.authService.getToken()
    });
    return this.httpClient.post<Category>(`${environment.URL_API}/category`,params, {headers: headers}).pipe(tap(
      (res: Category) => {
        if(res){
          return res;
        }
      }
    ));
  }

  updateCategory(category){
    let params = JSON.stringify(category);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'authorization': this.authService.getToken()
    });
    return this.httpClient.put<Category>(`${environment.URL_API}/category/${category._id}`, params, {headers: headers})
    .pipe(tap(
      (res: Category) => {
        return res;
      }
    ));
  }

  deleteCategory(id: string){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'authorization': this.authService.getToken()
    });
    return this.httpClient.delete<boolean>(`${environment.URL_API}/category/${id}`, {headers: headers})
    .pipe(tap(
      (res: boolean) => {
        return res;
      }
    ));
  }
}
