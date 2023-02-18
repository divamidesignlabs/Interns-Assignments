import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './common_components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

const routes: Routes = [
  {
    path:'',component:LandingPageComponent,pathMatch:'full' 
   },
    {
    path:'movie-details/:id',component:MovieDetailsComponent,pathMatch:'full' 
   },
   
   { path:'**', component:LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
