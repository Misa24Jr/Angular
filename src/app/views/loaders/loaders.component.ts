import { Component } from '@angular/core';
import { GreenballComponent } from '../../components/loaders/greenball/greenball.component';
import { HousecampComponent } from '../../components/loaders/housecamp/housecamp.component';
import { HelloComponent } from '../../components/loaders/hello/hello.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [GreenballComponent, HousecampComponent, HelloComponent],
  templateUrl: './loaders.component.html',
  styleUrl: './loaders.component.css'
})
export class InputComponent {

}
