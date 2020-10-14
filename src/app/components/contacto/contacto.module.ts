import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { ContactoService } from '../../services/contacto.service';
// Importar nuestro nuevo modulo
import { EmailModule } from '../../email/email.module';

@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactoRoutingModule,
    HttpClientModule,
    EmailModule
  ],
  providers:[
    ContactoService
  ]
})
export class ContactoModule { }