import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class CardComponent {
  @Input() iconClass?: string;
  @Input() cardTitle?: string;
  @Input() cardDescription?: string;
  
}
