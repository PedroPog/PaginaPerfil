import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'home',loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)},
];

