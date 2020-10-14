// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';

// Components
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

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
  ]
})
export class AdminModule { }
