import { Component } from '@angular/core';
import { fadeIn } from '../../../components/animation';

@Component({
  selector: 'admin-main',
  templateUrl: './main.component.html',
  animations: [
    fadeIn
  ]
})
export class MainComponent {
  title = 'Administración';
}