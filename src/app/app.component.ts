import { Component } from '@angular/core';
import{alertIntializations} from './interface/interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qarma';
  alertMsg:alertIntializations={
    action :'Remove User',
    question:'Are you sure you want to Remove User?',
    nameofThePerson:'Anuja kumari',
    suggestions:  `By confirming this Anuja Kumari wouldn’t be able to:`,
    suggestion1: '1. Access any Projects related to this Account',
    suggestion2:  '2. Any Personal Data Synced with this Account '
  }
  showAlertMsg :boolean=true;
  displayalert(){
      this.showAlertMsg=false;
  }
  
}
