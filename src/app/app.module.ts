import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './commoncomponents/headercomponent/headercomponent.component';
import { FootercomponentComponent } from './commoncomponents/footercomponent/footercomponent.component';
import { JoinedtabsComponent } from './commoncomponents/joinedtabs/joinedtabs.component';
import { TeamsComponent } from './teams/teams.component';
import { PopupComponent } from './popup/popup.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ParenttabsComponent } from './parenttabs/parenttabs.component';
import { FormsModule } from '@angular/forms';
import { TogglemsgComponent } from './togglemsg/togglemsg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    FootercomponentComponent,
    JoinedtabsComponent,
    TeamsComponent,
    PopupComponent,
    TeamMembersComponent,
    ParenttabsComponent,
    TogglemsgComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
