import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingmainComponent } from './bookingmain/bookingmain.component';
import { DetailsmainComponent } from './detailsmain/detailsmain.component';
import { LandingmainComponent } from './landingmain/landingmain.component';
const routes: Routes = [
    {
      path:"",component:LandingmainComponent
    },
   {
    path:"details",component:DetailsmainComponent
   },
   {
    path:'booking',component:BookingmainComponent
   }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  