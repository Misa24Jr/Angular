import { Component } from '@angular/core';
import { NotAllowedComponent } from '../../components/buttons/not-allowed/not-allowed.component';
import { ThreedimensionalButtonComponent } from '../../components/buttons/threedimensional-button/threedimensional-button.component';
import { LikeButtonComponent } from '../../components/buttons/like-button/like-button.component';
import { ButtonNavBarComponent } from '../../components/buttons/button-nav-bar/button-nav-bar.component';
import { AddButtonComponent } from '../../components/buttons/add-button/add-button.component';
import { DeleteButtonComponent } from '../../components/buttons/delete-button/delete-button.component';
import { CreativeButtonComponent } from '../../components/buttons/creative-button/creative-button.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    NotAllowedComponent,
    ThreedimensionalButtonComponent,
    LikeButtonComponent,
    ButtonNavBarComponent,
    AddButtonComponent,
    DeleteButtonComponent,
    CreativeButtonComponent,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
<<<<<<< HEAD
  title: string = 'Raspado';
=======
  buttonContent: string = 'Button';

  clickHandler = (): void => {
    console.log('Button clicked: ');
  };
>>>>>>> 634129fbef0ff392bb205fdf465105895c3d5e08
}
