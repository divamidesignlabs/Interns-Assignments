import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './commonComponents/header/header.component';
import { SliderComponent } from './commonComponents/slider/slider.component';
import { FilterComponent } from './commonComponents/filter/filter.component';
import { TabsComponent } from './commonComponents/tabs/tabs.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { BookingSummaryComponent } from './commonComponents/booking-summary/booking-summary.component';
import { BookingDetailsComponent } from './commonComponents/booking-details/booking-details.component';
import { CardsComponent } from './commonComponents/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    SliderComponent,
    FilterComponent,
    TabsComponent,
    BookingPageComponent,
    BookingSummaryComponent,
    BookingDetailsComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
