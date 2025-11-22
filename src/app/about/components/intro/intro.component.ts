import { Component } from '@angular/core';
import { Intro } from '../../../models';

@Component({
  selector: 'sat-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  intro: Intro = {
    title: 'Full Stack Developer (Java Spring Boot & Angular)',
    subTtle: '3+ Years of Experience',
  };
}
