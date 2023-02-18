import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { DetailsComponent } from './pages/details/details/details.component';

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
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
