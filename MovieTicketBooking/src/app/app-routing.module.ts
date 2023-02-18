import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common_components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
   path:'',component:LandingPageComponent,pathMatch:'full' 
  },
  {
    path:'details/:id',component:HeaderComponent,pathMatch:'full' 
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
