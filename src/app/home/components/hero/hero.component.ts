import { Component } from '@angular/core';

@Component({
  selector: 'sat-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  onDownload() {
    window.open('https://sathish-repos.github.io/assets/pdfs/resume/resume.pdf', '_blank');
  }
}
