import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddProjectsComponent } from './common/components/add-projects/add-projects.component';
import { PopUpComponent } from './common/components/pop-up/pop-up.component';
import { ToastComponent } from './common/components/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    AddProjectsComponent,
    PopUpComponent,
    ToastComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
