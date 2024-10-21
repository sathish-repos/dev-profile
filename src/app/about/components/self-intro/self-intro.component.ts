import { Component } from '@angular/core';
import { title } from 'node:process';

@Component({
  selector: 'sat-self-intro',
  standalone: true,
  imports: [],
  templateUrl: './self-intro.component.html',
  styleUrl: './self-intro.component.scss',
})
export class SelfIntroComponent {
  selfIntro = {
    intro: `Proficient in crafting dynamic and responsive user interfaces using Angular
      with state management via <b>NgRx</b>, adept at reactive programming with <b>RxJS</b>.
      Skilled in utilizing Bootstrap for layout and design, while ensuring
      semantic and accessible HTML, along with efficient and scalable CSS.`,
    items: [
      {
        title: 'Frontend',
        id: 'Frontend',
        description: `Angular is a front-end web application framework developed by Google. It allows developers to create dynamic, single-page applications (SPAs) using TypeScript, a superset of JavaScript.`,
      },
      {
        title: 'Version Control',
        id: 'Version-Control',
        description: `Strong JavaScript and TypeScript development skills, with experience in
          integrating designs from Figma into functional applications. Proficient in
          API testing and collaboration using Postman, with solid version control
          practices using <b>Git, GitHub, and GitLab</b>.`,
      },
      {
        title: 'What I Value',
        id: 'What-I-Value',
        description: `I foster open communication and teamwork, leveraging my technical
          proficiency in design tools and front-end development to challenges and
          learn continuously. I prioritize culture alongside product, believing a
          <b>supportive and collaborative environment</b> is key to success. I excel at
          tackling diverse design challenges and pushing boundaries. Always learning,
          I seek new experiences to improve.`,
      },
    ],
  };
}
