import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MinutesToHoursPipe } from './pipes/hrsToMins';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingPageComponent } from './movieDetails/booking-page/booking-page.component';
import { MovieTrailerComponent } from './common-components/movie-trailer/movie-trailer.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { MovieCardComponent } from './common-components/movie-card/movie-card.component';
import { MovieTagComponent } from './common-components/movie-tag/movie-tag.component';
import {HttpClientModule} from '@angular/common/http';
import {ReplacePipe} from './pipes/stringSeparationChange';
import { LoadingPageComponent } from './loadingPage/loading-page/loading-page.component';
import { MovieListComponent } from './loadingPage/movie-list/movie-list.component';
import { BookingFormComponent } from './bookingTickets/booking-form/booking-form.component';
import { ReactiveFormsModule } from '@angular/forms';
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
    BookingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
