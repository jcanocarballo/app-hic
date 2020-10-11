import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './components/auth/auth.module';
import { UserModule } from './components/users/user.module';
import { HomeModule } from './components/home/home.module';
import { ContactoModule } from './components/contacto/contacto.module';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'auth', loadChildren: './components/auth/auth.module#AuthModule'},
  {path: 'usuarios', loadChildren: './components/users/user.module#UserModule'},
  {path: 'home', loadChildren: './components/home/home.module#HomeModule'},
  {path: 'contacto', loadChildren: './components/contacto/contacto.module#ContactoModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
