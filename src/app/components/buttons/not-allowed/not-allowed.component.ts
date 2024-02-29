import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-not-allowed',
  standalone: true,
  imports: [],
  templateUrl: './not-allowed.component.html',
  styleUrl: './not-allowed.component.css',
})
export class NotAllowedComponent {
  @Input() title: string = 'Not Allowed';
  @Input() clickHandler: () => void = () => {};
}
