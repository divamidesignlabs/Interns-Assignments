import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertContainerComponent } from './common/components/alert-container/alert-container.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { HeaderComponent } from './common/components/header/header.component';
import { ProjectListingDefaultComponent } from './components/project-creation/project-listing-default/project-listing-default.component';

const routes: Routes = [
  // {path: '**',component: HeaderComponent, pathMatch: "full"},
  // {path:'header',component: HeaderComponent,pathMatch:"full"},
  // {path:'footer',component: FooterComponent,pathMatch:"full"},
  // {path:'alert',component: AlertContainerComponent,pathMatch:"full"}
  {path: '',component:ProjectListingDefaultComponent , pathMatch: "full"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
