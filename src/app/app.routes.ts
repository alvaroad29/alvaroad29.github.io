import { Routes } from '@angular/router';
import { Home } from '@features/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: '**',
    title: '404 | Alvaro Diaz',
    loadComponent: () => import('@features/not-found/not-found').then((m) => m.NotFound),
  },
];
