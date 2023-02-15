import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListingComponentComponent } from './routingcomponents/components/project-listing-component/project-listing-component.component';

const routes: Routes = [
  {
    path:"",component:ProjectListingComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
