import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';



@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
  ],
  imports: [
    RouterModule.forChild(HomeRoutes),
    CommonModule,
  ]
})
export class HomeModule { }
