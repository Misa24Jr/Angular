import { Component } from '@angular/core';
import { CardProductComponent } from '../../components/cards/card-target/card-target.component';
import { BarraComponent } from '../../components/cards/barra/barra.component';
import { CardPresentComponent } from '../../components/cards/card-present/card-present.component';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardProductComponent, BarraComponent, CardPresentComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  title: string = 'MasterSusy';
  name: string = 'Luis Romero';
}
