import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { AlertContainerComponent } from './common/components/alert-container/alert-container.component';
import { TabsComponent } from './common/components/tabs/tabs.component';
import { ToastComponent } from './common/components/toast/toast.component';
import { DataTableComponent } from './common/components/data-table/data-table.component';
import { ProjectListingDefaultComponent } from './components/project-creation/project-listing-default/project-listing-default.component';
import { CardComponent } from './common/components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AlertContainerComponent,
    TabsComponent,
    ToastComponent,
    DataTableComponent,
    ProjectListingDefaultComponent,
    CardComponent
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
