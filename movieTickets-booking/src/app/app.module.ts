import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-components/header/header.component';
import { LogoComponent } from './common-components/logo/logo.component';
import { SearchbarComponent } from './common-components/searchbar/searchbar.component';
import { DashboardComponent } from './common-components/dashboard/dashboard.component';
import { FormControl, FormGroup} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SearchbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
