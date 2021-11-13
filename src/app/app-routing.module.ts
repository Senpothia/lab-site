import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './plateforme/pages/accueil/accueil.component';
import { AboutComponent } from './plateforme/pages/about/about.component';
import { AideComponent } from './plateforme/pages/aide/aide.component';
import { ErrorComponent } from './plateforme/pages/error/error.component';
import { LoginComponent } from './plateforme/pages/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: AccueilComponent,
    pathMatch:'full'

  },

  {
    path: 'presentation',
    component: AboutComponent,
  
  },

  {
    path: 'aide',
    component: AideComponent,

  },

  {
    path: 'connexion',
    component: LoginComponent,

  },

  {
    path: '**',
    redirectTo: 'error',

  },

  {
    path: 'error',
    component: ErrorComponent,

  },



];


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
