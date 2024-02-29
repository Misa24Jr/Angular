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
<<<<<<< HEAD
=======
  @Input() clickHandler: () => void = () => {};
>>>>>>> 634129fbef0ff392bb205fdf465105895c3d5e08
}
