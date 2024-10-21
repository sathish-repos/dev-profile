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
    const link = document.createElement('a');
    link.target = '_blank';
    link.href = 'https://sathish-repos.github.io/assets/pdfs/resume/resume.pdf';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
}
