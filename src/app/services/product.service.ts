import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient,
              private authService: AuthService) { }

  getProducts(){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.httpClient.get<Product[]>(`${environment.URL_API}/product`, {headers: headers})
    .pipe(tap(
      (res: Product[]) => {
        return res;
      }
    ));
  }

  getProductById(id: string){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': this.authService.getToken()
    });
    return this.httpClient.get<Product>(`${environment.URL_API}/product/${id}`,{headers: headers})
    .pipe(tap(
      (res: Product)=>{
        return res
      }      
    ));
  }

  addProduct(product){
    let params = JSON.stringify(product);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'authorization': this.authService.getToken()
    });
    return this.httpClient.post<Product>(`${environment.URL_API}/product`,params, {headers: headers}).pipe(tap(
      (res: Product) => {
        if(res){
          return res;
        }
      }
    ));
  }

  updateProduct(product){
    let params = JSON.stringify(product);
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'authorization': this.authService.getToken()
    });
    return this.httpClient.put<Product>(`${environment.URL_API}/product/${product._id}`, params, {headers: headers})
    .pipe(tap(
      (res: Product) => {
        return res;
      }
    ));
  }

  deleteProduct(id: string){
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'authorization': this.authService.getToken()
    });
    return this.httpClient.delete<boolean>(`${environment.URL_API}/product/${id}`, {headers: headers})
    .pipe(tap(
      (res: boolean) => {
        return res;
      }
    ));
  }
}
