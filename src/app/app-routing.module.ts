import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingappComponent } from './bookingapp/bookingapp.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  
    {path: '', component: LandingpageComponent},
    {path:'/bookingapp', component:BookingappComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
