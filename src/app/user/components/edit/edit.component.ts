import { Component } from '@angular/core';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'admin-edit',
  templateUrl: './edit.component.html',
  animations:[
    fadeIn
  ]
})
export class EditComponent {
  title = 'Editar';
}