import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-component/header/header.component';
import { FooterComponent } from './common-component/footer/footer.component';
import { PopupComponent } from './common-component/popup/popup.component';
import { CommonTabsComponent } from './common-component/common-tabs/common-tabs.component';
import { ToastComponent } from './common-component/toast/toast.component';
import { DataTablesComponent } from './common-component/data-tables/data-tables.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CreateProjectComponent } from './common-component/create-project/create-project.component';
import { ProjectCreationFormComponent } from './project-creation-form/project-creation-form.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    CommonTabsComponent,
    ToastComponent,
    DataTablesComponent,
    HomeComponent,
    CreateProjectComponent,
    ProjectCreationFormComponent
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
