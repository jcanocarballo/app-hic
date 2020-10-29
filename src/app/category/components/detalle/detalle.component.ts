import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { fadeIn } from '../../../components/animation';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'category-detalle',
  templateUrl: './detalle.component.html',
  animations:[
    fadeIn
  ]
})

export class DetalleComponent implements OnInit{
  
  title:string;
  category: Category;
  public urlImage: string;

  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryService,
    private router: Router){
      this.title = "Detalle del categoryo."
      this.urlImage = `${environment.URL_API}/category`;
    }

    ngOnInit(){
      console.log("Componente detalle del categoryo iniciado...");   
      this.getCategory();        
    }

    getCategory(){
      this.route.params.forEach((params: Params) => {
        let id = params['id'];
        this.categoryService.getCategoryById(id).subscribe(res => {
          if(!res._id){
            this.router.navigateByUrl('/categorias/listado');
          }else{
            this.category = res;
            console.log(this.category);
          }          
        },
        err => {
          this.router.navigateByUrl('/categorias/listado');
          console.log(err);
        });
      })      
    }
}