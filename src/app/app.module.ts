import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { CommonTabsComponent } from './common-components/common-tabs/common-tabs.component';
import { AlertMessageComponent } from './common-components/alert-message/alert-message.component';
import {Alert} from 'src/app/model/consts';
import { ToastMessageComponent } from './common-components/toast-message/toast-message.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CommonTabsComponent,
    AlertMessageComponent,
    ToastMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
