import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-button',
  standalone: true,
  imports: [],
  templateUrl: './like-button.component.html',
  styleUrl: './like-button.component.css',
})
export class LikeButtonComponent {
  @Input() title: string = 'Like';
  @Input() clickHandler: () => void = () => {};
}
