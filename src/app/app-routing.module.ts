import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguredProjectsComponent } from './routingcomponents/components/configured-projects/configured-projects.component';
import { ProjectCreationformComponent } from './routingcomponents/components/project-creation-form/project-creationform.component';
import { ProjectListingComponentComponent } from './routingcomponents/components/project-listing-component/project-listing-component.component';

const routes: Routes = [
  {
    path:"",component:ProjectListingComponentComponent
  },
  {
    path:"project-creation",component:ProjectCreationformComponent
  },
  {
    path:"configured-projects",component:ConfiguredProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
