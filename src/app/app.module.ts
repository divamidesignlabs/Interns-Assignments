import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccordionModule} from 'primeng/accordion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { BookingDetailsComponent } from './common/booking-details/booking-details.component'; 
import { TabsComponent } from './common/tabs/tabs.component'; 
import { CardComponentsComponent } from './common/card-components/card-components.component';
import { FormComponent } from './pages/booking/form/form.component';
import { SummaryComponent } from './pages/booking/summary/summary.component';
import { TrailerComponent } from './pages/details/trailer/trailer.component';
import { SynopsosComponent } from './pages/details/synopsis/synopsos.component'; 
import { BookingoffersComponent } from './pages/details/bookingoffers/bookingoffers.component';
import { CastComponent } from './pages/details/cast/cast.component';
import { VideoComponent } from './pages/details/video/video.component';
import { FilterComponent } from './pages/landing/filter/filter.component';
import { SliderComponent } from './pages/landing/slider/slider.component';
import {HttpClientModule} from '@angular/common/http';
import { CardlistComponent } from './pages/landing/cardlist/cardlist.component'
// import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DetailsComponent } from './pages/details/details/details.component';

import { LandingmainComponent } from './landingmain/landingmain.component';
import { DetailsmainComponent } from './detailsmain/detailsmain.component';
import { BookingmainComponent } from './bookingmain/bookingmain.component';
import {AppRoutingModule}  from './app-routing.module'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingDetailsComponent,
    TabsComponent,
    CardComponentsComponent,
    FormComponent,
    SummaryComponent,
    TrailerComponent,
    SynopsosComponent,
    BookingoffersComponent,
    CastComponent,
    VideoComponent,
    FilterComponent,
    SliderComponent,
    CardlistComponent,
    DetailsComponent,
    LandingmainComponent,
    DetailsmainComponent,
    BookingmainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
