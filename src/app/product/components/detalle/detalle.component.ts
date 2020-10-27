import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { fadeIn } from '../../../components/animation';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'product-detalle',
  templateUrl: './detalle.component.html',
  animations:[
    fadeIn
  ]
})

export class DetalleComponent implements OnInit{
  
  title:string;
  product: Product;
  public urlImage: string;

  constructor(private route: ActivatedRoute, 
    private productService: ProductService,
    private router: Router){
      this.title = "Detalle del producto."
      this.urlImage = `${environment.URL_API}/product`;
    }

    ngOnInit(){
      console.log("Componente detalle del producto iniciado...");   
      this.getUsuario();        
    }

    getUsuario(){
      this.route.params.forEach((params: Params) => {
        let id = params['id'];
        this.productService.getProductById(id).subscribe(res => {
          if(!res._id){
            this.router.navigateByUrl('/productos/listado');
          }else{
            this.product = res;
            console.log(this.product);
          }          
        },
        err => {
          this.router.navigateByUrl('/productos/listado');
          console.log(err);
        });
      })      
    }
}