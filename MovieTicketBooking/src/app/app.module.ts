import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common-components/header/header.component';
import { MovieCardComponent } from './components/common-components/movie-card/movie-card.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieGenreSeperatedWithSlashPipe } from './pipes/movie-genre-seperated-with-slash.pipe';
import { LikedPercentagePipe } from './pipes/liked-percentage.pipe';
import { MintesToHoursAndMinutesPipe } from './pipes/mintes-to-hours-and-minutes.pipe';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketsCostPipe } from './pipes/tickets-cost.pipe';
import { GrandTotalPipe } from './pipes/grand-total.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent,
    LandingPageComponent,
    BookingPageComponent,
    MovieGenreSeperatedWithSlashPipe,
    LikedPercentagePipe,
    MintesToHoursAndMinutesPipe,
    TicketsCostPipe,
    GrandTotalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
