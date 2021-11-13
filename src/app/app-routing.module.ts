import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AccueilComponent } from './plateforme/pages/accueil/accueil.component';

const routes: Routes = [

  {
    path: '',
    component: AccueilComponent,
    pathMatch:'full'

  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
