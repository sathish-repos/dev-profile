import { Component } from '@angular/core';
import { Project } from '../../../models';

@Component({
  selector: 'sat-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Shuriken',
      image: 'projects/shuriken.png',
      url: 'https://shuriken-omega.vercel.app/',
      description: `This app provides an engaging platform for fans of the Naruto series to explore characters and their details.`,
    },
    {
      name: 'Learn IT',
      image: 'projects/learnit.png',
      url: 'https://sathish-repos.github.io/learnit/',
      description: `A learning platform that gives you notes, Q&A and code snippets for a wide range of topics.`,
    },
    {
      name: 'Random Dogs',
      image: 'projects/randomova.png',
      url: 'https://ssr-test-dog.vercel.app/',
      description: `This application designed to calm users, the core functionality would likely revolve around features aimed at reducing stress and anxiety.`,
    },
  ];
}
