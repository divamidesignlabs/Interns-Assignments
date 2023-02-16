import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { OrganizationalAccountComponent } from './AllComponents/organizational-account/organizational-account.component';
import { TabsComponent } from './Common/tabs/tabs.component';
import { PopupComponent } from './Common/popup/popup.component';
import { ToastComponent } from './Common/toast/toast.component';
import { ProjectListingDefaultComponent } from './AllComponents/project-creation/project-listing-default/project-listing-default.component';
import { ProjectCreationFormComponent } from './AllComponents/project-creation/project-creation-form/project-creation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OrganizationalAccountComponent,
    TabsComponent,
    PopupComponent,
    ToastComponent,
    ProjectListingDefaultComponent,
    ProjectCreationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
