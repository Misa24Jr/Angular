import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [],
  templateUrl: './card-target.component.html',
  styleUrl: './card-target.component.css'
})
export class CardProductComponent {
  @Input() title: string = 'Card Product';
  @Input() name: string = '';
}
