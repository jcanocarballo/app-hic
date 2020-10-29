import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router'
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';
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
  public category: Category;
  mensajeError: string = "";
  isError: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService){
    this.title = 'Registrar nuevo categorias';
    this.status = false;
    this.category = new Category();
    this.category.name = '';
    this.category.description = '';
    this.category.created = '';
    this.category.modified = '';
  }

  ngOnInit(){}

  addCategory(frmAddCategory){
    this.status = false;
    this.mensajeError = '';
    this.isError = false;
    this.categoryService.addCategory(this.category).subscribe( res =>{ 
      if(res._id){
        this.status = true;
        frmAddCategory.reset();          
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