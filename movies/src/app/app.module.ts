import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import {TimeConverter} from 'src/app/shared/movie-card/movie-card.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    TimeConverter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
