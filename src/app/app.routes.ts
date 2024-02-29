import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { CardComponent } from './card/card.component';
// import { HomeComponent } from './home/home.component';


export const routes: Routes = [
   {
    path: 'button', 
    component: ButtonComponent
   },
   {
    path: 'input',
    component: InputComponent
   },
   {
    path: 'card',
    component: CardComponent
   },
//    {
//     path: '',
//     redirectTo: '/home',
//     component: HomeComponent,
//     pathMatch: 'full'
//    }
];
