import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Common/CommonComponents/header/header.component';
import { FooterComponent } from './Common/CommonComponents/footer/footer.component';
import { ProjectListingDefaultComponent } from './project-listing-default/project-listing-default.component';
import { CardsComponent } from './Common/CommonComponents/cards/cards.component';
import { PopUpsComponent } from './Common/CommonComponents/pop-ups/pop-ups.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ToastComponent } from './Common/CommonComponents/toast/toast.component';
import { DataTableComponent } from './Common/CommonComponents/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectListingDefaultComponent,
    CardsComponent,
    PopUpsComponent,
    ProfileDetailsComponent,
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
