import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { ContactoService } from '../../services/contacto.service';

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactoRoutingModule,
    HttpClientModule
  ],
  providers:[
    ContactoService
  ]
})
export class ContactoModule { }