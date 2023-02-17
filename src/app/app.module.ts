import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponentsComponent } from './common-components/common-components.component';
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { UserMenuBarComponent } from './common-components/user-menu-bar/user-menu-bar.component';
import { CommonTabComponentComponent } from './common-components/common-tab-component/common-tab-component.component';
import { AlertMessageComponentComponent } from './common-components/alert-message-component/alert-message-component.component';
import { ToastCommonComponentComponent } from './common-components/toast-common-component/toast-common-component.component';
import{ QarmaServiceService } from './qarma.service.service';
import { TableDataComponent } from './table-data/table-data.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectListingDefaultComponent } from './project-creation-flow/project-listing-default/project-listing-default.component';
import { ProjectCreationFlowComponent } from './project-creation-flow/project-creation-flow.component';







@NgModule({
  declarations: [
    AppComponent,
    CommonComponentsComponent,
    HeaderComponent,
    FooterComponent,
    UserMenuBarComponent,
    CommonTabComponentComponent,
    AlertMessageComponentComponent,
    ToastCommonComponentComponent,
    TableDataComponent,
    ProjectListingDefaultComponent,
    ProjectCreationFlowComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [QarmaServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
