import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/category';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  animations:[
    fadeIn
  ]
})
export class EditComponent implements OnInit{
  
  public title:string;
  public category: Category;
  isError: boolean = false;
  mensajeError: string = "";
  status: boolean;  
  public idCategory: string;

  constructor(private route: ActivatedRoute, 
    private categoryService: CategoryService,
    private router: Router){
      this.title = "Actualizar datos del categorias."
    }

    ngOnInit(){
      console.log("Componete registrar iniciado...");
      this.getCategoryById();
    }
    getCategoryById(){
      this.route.params.forEach((params: Params) => {
        this.idCategory = params['id'];
        if(!this.idCategory){
          this.router.navigateByUrl('/categorias/listado');
        }
        this.categoryService.getCategoryById(this.idCategory).subscribe(res => {
          this.category = res;
        },
        err =>{
          console.log(err);
        })
      })      
    }
    guardar(){
      this.mensajeError = '';
      this.isError = false;
      this.categoryService.updateCategory(this.category).subscribe(res => {
        if(!res._id){
          this.isError = true;
        }else{
          this.status = true;
          this.router.navigate(['/categorias/detalle', this.category._id]);                  
        }        
      },
      err => {
        this.isError = true;
        if(err.error.status){
          this.mensajeError = `${err.error.status} : ${err.error.message}`;
        }else{
          this.mensajeError = `El servicio no se ecuentra disponible.`;
        } 
      })      
    }
}