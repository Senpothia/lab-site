import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListeSitesComponent } from './pages/liste-sites/liste-sites.component';
import { CreationSiteComponent } from './pages/creation-site/creation-site.component';
import { SiteComponent } from './pages/site/site.component';
import { CreationAnomalieComponent } from './pages/creation-anomalie/creation-anomalie.component';
import { ListeAnomaliesComponent } from './pages/liste-anomalies/liste-anomalies.component';



@NgModule({
  declarations: [
    AccueilComponent,
    ListeSitesComponent,
    CreationSiteComponent,
    SiteComponent,
    CreationAnomalieComponent,
    ListeAnomaliesComponent
  ],

  exports: [
    AccueilComponent,
    ListeSitesComponent,
    CreationSiteComponent,
    SiteComponent,
    CreationAnomalieComponent,
    ListeAnomaliesComponent
  ],

  imports: [
    CommonModule
  ]
})
export class PlateformeModule { }
