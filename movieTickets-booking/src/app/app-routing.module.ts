import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { BookingPageComponent } from './booking-page/booking-page.component';
import { MovieCardComponent } from './common-components/movie-card/movie-card.component';
import { LoadingPageComponent } from './loadingPage/loading-page/loading-page.component';
const routes: Routes = [
  {path:'',component:LoadingPageComponent},
  {path:"movie-detail",component:BookingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
