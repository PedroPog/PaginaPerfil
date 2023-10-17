import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetosComponent } from './projetos.component';
import { RouterModule } from '@angular/router';
import { ProjetosRoutes } from './projetos.routing';



@NgModule({
  declarations: [
    ProjetosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjetosRoutes)
  ]
})
export class ProjetosModule { }
