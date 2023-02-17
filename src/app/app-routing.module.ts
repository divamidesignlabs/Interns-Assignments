import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AknowledgementComponent } from './aknowledgement/aknowledgement.component';
import { HeaderComponent } from './common/header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistertrationFormComponent } from './registertration-form/registertration-form.component';

const routes: Routes = [
  {path :'remove' , component: HomePageComponent},
  {path:'create-project',component:RegistertrationFormComponent},
  {path : '' ,  component : AknowledgementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
