import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'sat-self-intro',
  standalone: true,
  imports: [],
  templateUrl: './self-intro.component.html',
  styleUrl: './self-intro.component.scss',
})
export class SelfIntroComponent {
  selfIntro: {
    intro: SafeHtml;
    picture: string;
  };

  constructor(private sanitizer: DomSanitizer) {
    this.selfIntro = {
      intro: this.sanitizer.bypassSecurityTrustHtml(
        `Proficient full-stack developer skilled in building dynamic and responsive user interfaces using Angular with state management via <b>NgRx</b> and reactive programming with <b>RxJS</b>. Experienced in developing robust backend services with <b>Java Spring Boot</b>, including RESTful APIs, security, and database integration. Adept at using Bootstrap for clean UI layouts, writing semantic and accessible HTML, and crafting scalable, maintainable CSS.`
      ),
      picture: 'https://sathish-repos.github.io/assets/images/profile/profile.jpeg',
    };
  }
}
