import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListeSitesComponent } from './pages/liste-sites/liste-sites.component';
import { CreationSiteComponent } from './pages/creation-site/creation-site.component';
import { SiteComponent } from './pages/site/site.component';
import { CreationAnomalieComponent } from './pages/creation-anomalie/creation-anomalie.component';
import { ListeAnomaliesComponent } from './pages/liste-anomalies/liste-anomalies.component';
import { AboutComponent } from './pages/about/about.component';
import { AideComponent } from './pages/aide/aide.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { RouterModule } from '@angular/router';
import { CreationCompteComponent } from './pages/creation-compte/creation-compte.component';
import { EspaceComponent } from './pages/espace/espace.component';



@NgModule({
  declarations: [
    AccueilComponent,
    ListeSitesComponent,
    CreationSiteComponent,
    SiteComponent,
    CreationAnomalieComponent,
    ListeAnomaliesComponent,
    AboutComponent,
    AideComponent,
    LoginComponent,
    ErrorComponent,
    CreationCompteComponent,
    EspaceComponent
  ],

  exports: [
    AccueilComponent,
    ListeSitesComponent,
    CreationSiteComponent,
    SiteComponent,
    CreationAnomalieComponent,
    ListeAnomaliesComponent,
    AboutComponent,
    AideComponent,
    LoginComponent,
    ErrorComponent,
    CreationCompteComponent,
    EspaceComponent
  
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PlateformeModule { }
