import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FilterComponent } from './filter/filter.component';
import { MoviesComponent } from './movies/movies.component';
import { TabsComponent } from './tabs/tabs.component';
import{HttpClientModule} from '@angular/common/http';
import { BannersComponent } from './banners/banners.component';
import { FormComponent } from './form/form.component';
import { ParenttabsComponent } from './parenttabs/parenttabs.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FilterComponent,
    MoviesComponent,
    TabsComponent,
    BannersComponent,
    FormComponent,
    ParenttabsComponent,
    MainComponent,
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
