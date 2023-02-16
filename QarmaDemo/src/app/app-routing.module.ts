import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationalAccountComponent } from './AllComponents/organizational-account/organizational-account.component';

const routes: Routes = [
  {path : 'profile-details', component : OrganizationalAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
