import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router'
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'admin-add',
  templateUrl: './add.component.html',
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ]),
    fadeIn
  ]
})
export class AddComponent implements OnInit {
  public status;
  public title;
  public product: Product;
  mensajeError: string = "";
  isError: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService){
    this.title = 'Registrar nuevo producto';
    this.status = false;
    this.product = new Product();
    this.product.p_name = '';
    this.product.p_description = '';
    this.product.p_price = 0;
    this.product.image = '';
    this.product.p_created = '';
    this.product.p_modified = '';
  }

  ngOnInit(){}

  addProduct(frmAddProduct){
    this.status = false;
    this.mensajeError = '';
    this.isError = false;
    this.productService.addProduct(this.product).subscribe( res =>{          
      console.log(res);
      if(res._id){
        this.status = true;
        frmAddProduct.reset();  
      }
    },
    err =>{
      this.isError = true;
      if(err.error.status){
        this.mensajeError = `${err.error.status} : ${err.error.message}`;
      }else{
        this.mensajeError = `El servicio no se ecuentra disponible.`;
      }           
    });
  }
}