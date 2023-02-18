import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { CommonTabsComponent } from './common-components/common-tabs/common-tabs.component';
import { AlertMessageComponent } from './common-components/alert-message/alert-message.component';
import {Alert} from 'src/app/model/consts';
import { ToastMessageComponent } from './common-components/toast-message/toast-message.component';
import {HttpClientModule} from '@angular/common/http';
import { ProjectCreationComponent } from './project-creation-flow/project-creation/project-creation.component';
import { CreateProjectComponent } from './project-creation-flow/create-project/create-project.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CommonTabsComponent,
    AlertMessageComponent,
    ToastMessageComponent,
    ProjectCreationComponent,
    CreateProjectComponent
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
