import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlateformeModule } from './plateforme/plateforme.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PlateformeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
