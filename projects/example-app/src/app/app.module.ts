import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkyrimPlanningModule } from 'projects/skyrim-planning/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkyrimPlanningModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
