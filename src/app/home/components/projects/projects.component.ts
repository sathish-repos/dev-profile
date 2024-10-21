import { Component } from '@angular/core';

@Component({
  selector: 'sat-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Shuriken',
      image: 'projects/shuriken.png',
      url: 'https://shuriken-omega.vercel.app/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus rem ut optio sed at, a laudantium vero quidem alias!',
    },
    {
      name: 'Pick Me A Theme',
      image: 'projects/pickmeatheme.png',
      url: 'https://pickmeatheme.xyz/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus rem ut optio sed at, a laudantium vero quidem alias!',
    },
    {
      name: 'Todo Firebase',
      image: 'projects/todo-firebase.png',
      url: 'https://todo-firebase-123.web.app/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus rem ut optio sed at, a laudantium vero quidem alias!',
    },
    {
      name: 'Portfolio 2',
      image: 'projects/sathish-code.png',
      url: 'https://sathish-code.web.app/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus rem ut optio sed at, a laudantium vero quidem alias!',
    },
    {
      name: 'Random Dogs',
      image: 'projects/randomova.png',
      url: 'https://randomova.vercel.app/dogs/v1',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus rem ut optio sed at, a laudantium vero quidem alias!',
    },
    {
      name: 'Book store',
      image: 'projects/book-store.png',
      url: 'https://showcase-apps-plum.vercel.app/',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid natus rem ut optio sed at, a laudantium vero quidem alias!',
    },
  ];
}
