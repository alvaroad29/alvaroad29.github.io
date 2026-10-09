import { Routes } from '@angular/router';
import { Home } from '@features/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Tu Nombre | Portfolio' },
  { path: '**', redirectTo: '' }, // luego lo reemplazamos por una página 404
];
