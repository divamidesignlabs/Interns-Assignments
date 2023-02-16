import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './common/components/headercomponent/headercomponent.component';
import { FootercomponentComponent } from './common/components/footercomponent/footercomponent.component';
import { ComponentContainerComponent } from './common/components/component-container/component-container.component';
import { PopUpcomponentComponent } from './common/components/pop-upcomponent/pop-upcomponent.component';
import { ProjectListingComponentComponent } from './routingcomponents/components/project-listing-component/project-listing-component.component';
import { ProjectCreatingComponentComponent } from './routingcomponents/components/project-creating-component/project-creating-component.component';
import { TabcompomentComponent } from './common/components/tabcompoment/tabcompoment.component';
import { ToastComponent } from './common/components/toast/toast.component';
import { DatatableComponent } from './common/components/datatable/datatable.component';
<<<<<<< Updated upstream

=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectCreationformComponent } from './routingcomponents/components/project-creationform/project-creationform.component';
import { ReactiveFormsModule } from "@angular/forms"
>>>>>>> Stashed changes
@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    ComponentContainerComponent,
    PopUpcomponentComponent,
    ProjectListingComponentComponent,
    ProjectCreatingComponentComponent,
    TabcompomentComponent,
    ToastComponent,
    DatatableComponent,
<<<<<<< Updated upstream
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
=======
    ProjectCreationformComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],

  providers: [],

>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
