import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'sat-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  intro = {
    title: 'Full Stack Developer (Java Spring Boot & Angular)',
    subTtle: '3+ Years of Experience',
  };
}
