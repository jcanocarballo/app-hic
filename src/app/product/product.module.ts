// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './product-routing.module';

// Components
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

// Servicios
import { ProductService } from '../services/product.service';
import { AuthService } from '../services/auth.service';
import { UploadService } from '../services/upload.service';

// Guards
import { AdminGuard } from '../guard/admin.guard';

import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent, 
    AddComponent,
    SearchPipe
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
    AddComponent 
  ],
  providers:[
    AuthService,
    ProductService,
    AdminGuard,
    UploadService
  ]
})
export class ProductModule { }
