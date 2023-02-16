import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListingDefaultComponent } from './project-listing-default/project-listing-default.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {ProjectCreationFormComponent} from './project-creation-form/project-creation-form.component'
const routes: Routes = [
  {path:"",component:ProjectListingDefaultComponent},
  {path:"profileDetails",component:ProfileDetailsComponent},
  {path:"projectCreationForm",component:ProjectCreationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
