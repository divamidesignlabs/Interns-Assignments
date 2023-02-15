import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { PopupComponent } from './common/popup/popup.component';
import { ButtonComponent } from './common/button/button.component';
import { SwitchTabsComponent } from './common/switch-tabs/switch-tabs.component';
import { ToastComponent } from './common/toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    ButtonComponent,
    SwitchTabsComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
