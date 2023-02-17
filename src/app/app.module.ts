import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PopupComponent } from './common/popup/popup.component';
import { ButtonComponent } from './common/button/button.component';
import { SwitchTabsComponent } from './common/switch-tabs/switch-tabs.component';
import { ToastComponent } from './common/toast/toast.component';
import {HttpClientModule} from '@angular/common/http';
import { DataTableComponent } from './common/data-table/data-table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectListingDefaultComponent } from './components/project-listing-default/project-listing-default.component';
import { ProjectRootComponent } from './common/project-root/project-root.component';
import { ProjectCreationComponent } from './components/project-creation/project-creation.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    ButtonComponent,
    SwitchTabsComponent,
    ToastComponent,
    DataTableComponent,
    DashboardComponent,
    ProjectListingDefaultComponent,
    ProjectRootComponent,
    ProjectCreationComponent,
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
