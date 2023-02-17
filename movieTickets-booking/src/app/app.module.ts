import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MinutesToHoursPipe } from './pipes/hrsToMins';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './common-components/movie-card/movie-card.component';
import { MovieTagComponent } from './common-components/movie-tag/movie-tag.component';
import {HttpClientModule} from '@angular/common/http';
import {ReplacePipe} from './pipes/stringSeparationChange';
import { LoadingPageComponent } from './loadingPage/loading-page/loading-page.component';
import { MovieListComponent } from './loadingPage/movie-list/movie-list.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieTagComponent,
    MinutesToHoursPipe,
    ReplacePipe,
    LoadingPageComponent,
    MovieListComponent
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
