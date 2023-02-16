import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/header/footer/footer.component';
import { ContainerComponent } from './common/header/container/container.component';
import { AlertComponent } from './common/header/alert/alert.component';
import { TabsComponent } from './common/header/tabs/tabs.component';
import { ToastMessageComponent } from './common/header/toast-message/toast-message.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayDataInTableComponent } from './common/header/display-data-in-table/display-data-in-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    AlertComponent,
    TabsComponent,
    ToastMessageComponent,
    DisplayDataInTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
