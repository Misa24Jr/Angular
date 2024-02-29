import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-creative-button',
  standalone: true,
  imports: [],
  templateUrl: './creative-button.component.html',
  styleUrl: './creative-button.component.css',
})
export class CreativeButtonComponent {
  @Input() title: string = 'Creative Button';
  @Input() clickHandler: () => void = () => {};
}
