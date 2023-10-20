import { Routes } from '@angular/router';
import { ProjetosComponent } from './projetos.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

export const ProjetosRoutes: Routes = [
  {
    path:'',
    component: ProjetosComponent,
    children:[
      {path:'detalhes',component:DetalhesComponent}
    ]
  },
];

