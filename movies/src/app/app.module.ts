import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import {TimeConverter} from 'src/app/shared/movie-card/movie-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsComponent } from './shared/tabs/tabs.component';
import {SynopsisComponent} from './shared/synopsis/synopsis.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    TimeConverter,
    CarouselComponent,
    TabsComponent,
    SynopsisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule  ,
    MaterialModule ,
    MatInputModule,
    MatAutocompleteModule,
    CommonModule ,
    MatTabsModule
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
