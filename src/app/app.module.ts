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
import{ AlertInterface } from 'src/app/modles/common modles';
import { ToastCommonComponentComponent } from './common-components/toast-common-component/toast-common-component.component';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
