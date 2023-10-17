import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path:'home',loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule)},
  {path:'projetos',loadChildren: () => import('./pages/projetos/projetos.module').then(x => x.ProjetosModule)},
];

