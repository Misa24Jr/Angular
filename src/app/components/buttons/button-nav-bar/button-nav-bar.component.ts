import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './button-nav-bar.component.html',
  styleUrl: './button-nav-bar.component.css',
})
export class ButtonNavBarComponent {
  @Input() homeClickHandler: () => void = () => {};
  @Input() searchClickHandler: () => void = () => {};
  @Input() profileClickHandler: () => void = () => {};
  @Input() storeClickHandler: () => void = () => {};
}
