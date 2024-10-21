import { Component } from '@angular/core';
import {
  ContactComponent,
  DisciplinesComponent,
  EducationComponent,
  ExperienceComponent,
  IntroComponent,
  SelfIntroComponent,
} from './components';

@Component({
  selector: 'sat-about',
  standalone: true,
  imports: [
    IntroComponent,
    SelfIntroComponent,
    ExperienceComponent,
    EducationComponent,
    DisciplinesComponent,
    ContactComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export default class AboutComponent {}
