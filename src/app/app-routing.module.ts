import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { ParenttabsComponent } from './parenttabs/parenttabs.component';


const routes: Routes = [
  {path:' ',redirectTo:'movies',pathMatch:'full'},
   {path:'booking', component:FormComponent},
   {path:'movies',component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
