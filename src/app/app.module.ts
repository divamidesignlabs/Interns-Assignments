import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AlertComponent } from './common/alert/alert.component';
import { ToastComponent } from './common/toast/toast.component';
import { TableDisplayComponent } from './table/table-display/table-display.component';
import { TabsComponent } from './common/tabs/tabs.component';
import { ProjectListingDefaultComponent } from './all components/project-listing-default/project-listing-default.component';
import { ProjectCreationFormComponent } from './all components/project-creation-form/project-creation-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertComponent,
    ToastComponent,
    TableDisplayComponent,
    TabsComponent,
    ProjectListingDefaultComponent,
    ProjectCreationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
