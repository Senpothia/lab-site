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
    LoginComponent
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
    LoginComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PlateformeModule { }
