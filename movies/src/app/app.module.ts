import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import {TimeConverter} from 'src/app/shared/movie-card/movie-card.component';
@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    TimeConverter,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
