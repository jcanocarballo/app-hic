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
import { DetalleComponent } from './components/detalle/detalle.component';

// Servicios
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { UploadService } from '../services/upload.service';

// Guards
import { AdminGuard } from '../guard/admin.guard';

import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent, 
    EditComponent,
    AddComponent,
    DetalleComponent,
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
    EditComponent,
    AddComponent,
    DetalleComponent
  ],
  providers:[
    AuthService,
    UserService,
    AdminGuard,
    UploadService
  ]
})
export class UserModule { }
