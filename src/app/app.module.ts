import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsComponent } from './common-components/common-components.component';
import { HeaderComponentComponent } from './common-components/header-component/header-component.component';
import { TabsComponentComponent } from './common-components/tabs-component/tabs-component.component';
import { FilerComponentComponent } from './common-components/filer-component/filer-component.component';
import { ChordComponentComponent } from './common-components/chord-component/chord-component.component';
import { BookingAppServicesService } from './common-components/booking-app-services.service';
import { SlideComponentComponent } from './common-components/slide-component/slide-component.component';
import { FormComponent } from './common-components/form/form.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { BookingappComponent } from './bookingapp/bookingapp.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CommonComponentsComponent,
    HeaderComponentComponent,
    TabsComponentComponent,
    FilerComponentComponent,
    ChordComponentComponent,
    SlideComponentComponent,
    FormComponent,
    LandingpageComponent,
    BookingappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BookingAppServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
