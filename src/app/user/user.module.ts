// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './user-routing.module';

// Components
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

// Servicios
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent, 
    EditComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  exports: [
    MainComponent,
    ListComponent, 
    EditComponent,
    AddComponent
  ],
  providers:[
    AuthService,
    UserService
  ]
})
export class UserModule { }
