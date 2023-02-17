import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectCreationComponent } from './components/project-creation/project-creation.component';
import { ProjectListingDefaultComponent } from './components/project-listing-default/project-listing-default.component';
const routes: Routes = [
  {
    path:"",component:DashboardComponent
  },
 {
  path:"project-listing",component:ProjectListingDefaultComponent
 },
 {
  path:'project-creation',component:ProjectCreationComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
