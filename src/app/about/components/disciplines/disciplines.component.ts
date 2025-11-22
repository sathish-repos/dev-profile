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
    'Java',
    'Spring Boot',
    'Angular',
    'RxJs',
    'NgRX',
    'PostgreSQL',
    'Bootstrap',
    'Figma',
    'PostMan',
    'Github',
  ];
}
