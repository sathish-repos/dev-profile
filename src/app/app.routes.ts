import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    title: 'About',
    loadComponent: () => import('./about/about.component'),
  },
  {
    path: '',
    title: 'Sathishkumar',
    loadComponent: () => import('./home/home.component'),
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
