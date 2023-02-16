import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonTabsComponent } from './common-components/common-tabs/common-tabs.component';
import { ProjectCreationComponent } from './project-creation-flow/project-creation/project-creation.component';
import { CreateProjectComponent } from './project-creation-flow/create-project/create-project.component';
const routes: Routes = [
  // {path:"",component:CommonTabsComponent},
  {path:'project-creation',component:ProjectCreationComponent},
  {path:'create-project',component:CreateProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
