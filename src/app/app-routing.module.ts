import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './user/components/perfil/perfil.component';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './components/home/home.module';
import { ContactoModule } from './components/contacto/contacto.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  {path: '', loadChildren: './user/user.module#UserModule'},
  {path: 'home', loadChildren: './components/home/home.module#HomeModule'},
  {path: 'contacto', loadChildren: './components/contacto/contacto.module#ContactoModule'},
  {path: '', loadChildren: './product/product.module#ProductModule'},
  {path: '', loadChildren: './category/category.module#CategoryModule'},
  {path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
