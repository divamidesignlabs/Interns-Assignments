import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './movieDetails/booking-page/booking-page.component';
import { MovieCardComponent } from './common-components/movie-card/movie-card.component';
import { LoadingPageComponent } from './loadingPage/loading-page/loading-page.component';
import { BookingFormComponent } from './bookingTickets/booking-form/booking-form.component';
const routes: Routes = [
  {path:'',component:LoadingPageComponent},
  {path:"movie-detail",component:BookingPageComponent},
  {path:"book-ticket",component:BookingFormComponent},
  {path:"booking-form",component:BookingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
