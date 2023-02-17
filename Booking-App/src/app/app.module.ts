import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Common/header/header.component';
import { ScrollingHeadComponent } from './scrolling-head/scrolling-head.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { MovieFilteringComponent } from './movie-filtering/movie-filtering.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrollingHeadComponent,
    HomePageComponent,
    MovieCardsComponent,
    MovieFilteringComponent,
    DetailsPageComponent,
    BookingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
