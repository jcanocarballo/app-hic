import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';

// Guards
import { AdminGuard } from '../guard/admin.guard';

const adminRoutes: Routes = [
  {
    path: 'productos', 
    component: MainComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '', redirectTo: 'listado', pathMatch: 'full'
      },
      {
        path: 'listado',
        component: ListComponent
      },
      {
        path: 'crear',
        component: AddComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
