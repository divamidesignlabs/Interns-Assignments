import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './common-components/movie-card/movie-card.component';
import { LoadingPageComponent } from './loadingPage/loading-page/loading-page.component';
const routes: Routes = [
  {path:'',component:LoadingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
