import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos.component';
import { RouterModule } from '@angular/router';
import { ProjetosRoutes } from './projetos.routing';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { BoxComponent } from 'src/app/components/box/box.component';



@NgModule({
  declarations: [
    ProjetosComponent,
    DetalhesComponent,
    BoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjetosRoutes)
  ]
})
export class ProjetosModule { }
