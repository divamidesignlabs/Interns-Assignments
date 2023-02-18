import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Common/header/header.component';
import { ScrollingHeadComponent } from './scrolling-head/scrolling-head.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MovieCardsComponent } from './movie-cards/movie-cards.component';
import { MovieFilteringComponent } from './movie-filtering/movie-filtering.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ScrollingHeadComponent,
    HomePageComponent,
    MovieCardsComponent,
    MovieFilteringComponent,
    DetailsPageComponent,
    BookingPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
