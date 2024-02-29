import { Component } from '@angular/core';

@Component({
  selector: 'app-button-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './button-nav-bar.component.html',
  styleUrl: './button-nav-bar.component.css',
})
export class ButtonNavBarComponent {
  home() {
    console.log('Home');
  }
  search() {
    console.log('Search');
  }
  profile() {
    console.log('Profile');
  }
  store() {
    console.log('Store');
  }
}
