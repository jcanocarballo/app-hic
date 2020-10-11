import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';
import { UserService } from '../../services/user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
