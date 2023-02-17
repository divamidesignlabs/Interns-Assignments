import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common_components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { FilterComponent } from './common_components/filter/filter.component';
import { CardComponent } from './common_components/card/card.component';
import { RunningShowsComponent } from './components/running-shows/running-shows.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    FilterComponent,
    CardComponent,
    RunningShowsComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
