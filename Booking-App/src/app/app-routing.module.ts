import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { HomePageComponent } from './home-page/home-page.component';
// import {CarouselModule} from 'primeng/carousel';

const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : 'movie-details', component : DetailsPageComponent},
  {path : 'booking-tickets', component : BookingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
