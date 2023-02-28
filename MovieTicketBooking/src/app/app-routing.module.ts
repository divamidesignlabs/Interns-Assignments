import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path:'' , component : LandingPageComponent },
  { path :'booking-page' , component : BookingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
