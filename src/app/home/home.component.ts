import { Component } from '@angular/core';
import { HeroComponent, ProjectsComponent } from './components';

@Component({
  selector: 'sat-home',
  standalone: true,
  imports: [HeroComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {}
