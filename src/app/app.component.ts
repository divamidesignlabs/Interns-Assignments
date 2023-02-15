import { Component } from '@angular/core';
import { PassData } from './pass-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quarma';
  flag:boolean=false
  getAccess:boolean=false
  alertdetails:PassData = {
    header: 'Remove user',
    remainder: 'Are you sure want to ',
    nameofitem: "Anuja Kumari",
    confirmationmessagestart: "By confirming this ",
    confirmationmessageend:" wouldn't be able to:",
    listofelements: ["Access any Projects related to this account", "Any personal data synced with this account"],
    firstbutton: "Cancel",
    secondbutton: "Remove User",
    name: ''
  }
  
  
}
