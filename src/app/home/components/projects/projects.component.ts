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
      description: `This app provides an engaging platform for fans of the Naruto series to explore characters and their details.`,
    },
    {
      name: 'Pick Me A Theme',
      image: 'projects/pickmeatheme.png',
      url: 'https://pickmeatheme.xyz/',
      description: `"Pick Me A Theme" is an innovative application designed to help users create personalized color themes for various projects`,
    },
    {
      name: 'Todo Firebase',
      image: 'projects/todo-firebase.png',
      url: 'https://todo-firebase-123.web.app/',
      description: `Todo Application is a task management tool built using Firebase for backend services.`,
    },
    {
      name: 'Portfolio 2',
      image: 'projects/sathish-code.png',
      url: 'https://sathish-code.web.app/',
      description: `This portfolio website is a personal showcase designed to highlight an individual's skills, projects, and professional experiences. It serves as an online resume and creative outlet.`,
    },
    {
      name: 'Random Dogs',
      image: 'projects/randomova.png',
      url: 'https://randomova.vercel.app/dogs/v1',
      description: `This application designed to calm users, the core functionality would likely revolve around features aimed at reducing stress and anxiety.`,
    },
    {
      name: 'Book store',
      image: 'projects/book-store.png',
      url: 'https://showcase-apps-plum.vercel.app/',
      description: `Bookstore app is designed to provide users with a convenient and engaging platform for discovering, purchasing, and enjoying books.`,
    },
  ];
}
