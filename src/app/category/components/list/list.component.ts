import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  animations:[
    fadeIn
  ]
})
export class ListComponent implements OnInit{
  title = 'Lista de categorias';
  numbers = new Array(10);
  categories = new Array();
  busqueda: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService){

  }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe( res => {
      this.categories = res
      console.log(this.categories)
    },
    err =>{
      console.log(err)
    })
  }

  deleteCategory(id){
    this.categoryService.deleteCategory(id).subscribe(res =>{
      if(res){
        this.getCategories();
      }else{
        alert("Error en el servidor");
      }
    },
    err => {
      alert(err);
    })
  }
}