import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import{TeamsComponent} from teams\teams.component;
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [{
  path:'joinedteam',component:TeamsComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
