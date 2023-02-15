import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { AlertContainerComponent } from './common/components/alert-container/alert-container.component';
import { TabsComponent } from './common/components/tabs/tabs.component';
import { ToastComponent } from './common/components/toast/toast.component';
import { DataTableComponent } from './common/components/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertContainerComponent,
    TabsComponent,
    ToastComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
