import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MaterialModule} from './material.module'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import {TimeConverter} from 'src/app/shared/movie-card/movie-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    TimeConverter,
    CarouselComponent,
     HeaderComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    CommonModule ,
    MaterialModule  ,
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {}
