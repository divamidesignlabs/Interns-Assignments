import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MinutesToHoursPipe } from './pipes/hrsToMins';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingPageComponent } from './movieDetails/booking-page/booking-page.component';
import { MovieTrailerComponent } from './common-components/movie-trailer/movie-trailer.component';

import { MovieCardComponent } from './common-components/movie-card/movie-card.component';
import { MovieTagComponent } from './common-components/movie-tag/movie-tag.component';
import {HttpClientModule} from '@angular/common/http';
import {ReplacePipe} from './pipes/stringSeparationChange';
import { LoadingPageComponent } from './loadingPage/loading-page/loading-page.component';
import { MovieListComponent } from './loadingPage/movie-list/movie-list.component';
import { BookingFormComponent } from './bookingTickets/booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SummaryComponent } from './common-components/summary/summary.component';
import { HeaderLogoComponent } from './common-components/header-logo/header-logo.component';
import { SearchbarComponent } from './common-components/searchbar/searchbar.component';
import { DashboardComponent } from './common-components/dashboard/dashboard.component';
import { HeaderComponent } from './common-components/header/header.component';
import { FilterComponent } from './common-components/filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieTagComponent,
    MinutesToHoursPipe,
    ReplacePipe,
    LoadingPageComponent,
    MovieListComponent,
    BookingPageComponent,
    MovieTrailerComponent,
    BookingFormComponent,
    SummaryComponent,
    HeaderLogoComponent,
    SearchbarComponent,
    DashboardComponent,
    HeaderComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
