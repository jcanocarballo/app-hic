import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';

const adminRoutes: Routes = [
  {
    path: 'admin-panel', 
    component: MainComponent,
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
      },
      {
        path: 'editar',
        component: EditComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
