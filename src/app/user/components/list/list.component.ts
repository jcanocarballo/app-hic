import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  animations:[
    fadeIn
  ]
})
export class ListComponent implements OnInit{
  title = 'Listado';
  numbers = new Array(10);
  users = new Array();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService){

  }

  ngOnInit(){
    this.obtenerListaUsuarios();
  }

  obtenerListaUsuarios(){
    this.userService.obtenerListaUsuarios().subscribe( res => {
      console.log(res)
    },
    err =>{
      console.log(err)
    })
  }
}