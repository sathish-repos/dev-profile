import { Component } from '@angular/core';

@Component({
  selector: 'sat-disciplines',
  standalone: true,
  imports: [],
  templateUrl: './disciplines.component.html',
  styleUrl: './disciplines.component.scss',
})
export class DisciplinesComponent {
  disciplines = [
    'Angular',
    'RxJs',
    'NgRX',
    'Bootstrap',
    'Figma',
    'PostMan',
    'Firebase',
    'Github',
    'HTML',
    'CSS',
    'JavaScript',
  ];
}
