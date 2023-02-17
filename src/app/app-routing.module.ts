import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListingDefaultComponent } from './project-listing-default/project-listing-default.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProjectCreationFormComponent} from './project-creation-form/project-creation-form.component'
import { ProjectCreationAcknowledgementComponent } from './project-creation-acknowledgement/project-creation-acknowledgement.component';
import {ProjectListingCardviewComponent} from './project-listing-cardview/project-listing-cardview.component'
const routes: Routes = [
  {path:"",component:ProjectListingDefaultComponent},
  {path:"profileDetails",component:ProfileDetailsComponent},
  {path:"projectCreationForm",component:ProjectCreationFormComponent},
  {path:"projectCreationForm/projectCreationAcknowledgement",component:ProjectCreationAcknowledgementComponent},
  {path:"projectCreationForm/projectCreationAcknowledgement/projectListingCardview",component:ProjectListingCardviewComponent},
  {path:"projects/projectListingCardview",component:ProjectListingCardviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
