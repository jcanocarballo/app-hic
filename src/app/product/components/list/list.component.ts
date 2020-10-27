import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  animations:[
    fadeIn
  ]
})
export class ListComponent implements OnInit{
  title = 'Lista de productos';
  numbers = new Array(10);
  products = new Array();
  busqueda: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService){

  }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe( res => {
      this.products = res
      console.log(this.products)
    },
    err =>{
      console.log(err)
    })
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(res =>{
      if(res){
        this.getProducts();
      }else{
        alert("Error en el servidor");
      }
    },
    err => {
      alert(err);
    })
  }
}