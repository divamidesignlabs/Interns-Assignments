import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationalAccountComponent } from './AllComponents/organizational-account/organizational-account.component';
import { AcknowledgementComponent } from './AllComponents/project-creation/acknowledgement/acknowledgement.component';
import { ProjectCreationFormComponent } from './AllComponents/project-creation/project-creation-form/project-creation-form.component';
import { ProjectListingDefaultComponent } from './AllComponents/project-creation/project-listing-default/project-listing-default.component';

const routes: Routes = [
  {path : '', component : ProjectListingDefaultComponent},
  {path : 'profile-details', component : OrganizationalAccountComponent},
  {path : 'creation-form', component : ProjectCreationFormComponent},
  {path:'acknowledgement', component: AcknowledgementComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
