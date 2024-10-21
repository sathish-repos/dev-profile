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
    title: 'Software Developer (Angular & Frontend Technologies)',
    subTtle: '2+ Years of Experience',
  };
}
