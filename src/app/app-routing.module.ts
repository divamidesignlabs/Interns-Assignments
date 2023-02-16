import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListingDefaultComponent } from './project-listing-default/project-listing-default.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
const routes: Routes = [
  {path:"",component:ProjectListingDefaultComponent},
  {path:"profileDetails",component:ProfileDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
