import { Component } from '@angular/core';
import { CardComponent } from '../cards/cards';

@Component({
  imports: [CardComponent],
  selector: 'app-appmenu',
  styleUrl: './appmenu.css',
  templateUrl: './appmenu.html',
})
export class AppMenuComponent {}
