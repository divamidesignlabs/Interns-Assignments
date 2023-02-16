import { Component } from '@angular/core';
import { HeaderComponent } from './common/header/header.component';
import { AlertInfo, tabsInfo, toastInfo } from './interfaces/alertInterface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Qarma';
  
  // 
  alertStatus:boolean=true;
  
  // popup data is intialized here
  popupData: AlertInfo = {
    alertType: ['Remove User', 'cancel'],
    label: 'Anuja kumari',
    toConfirmMessage:`Are you sure you want to Remove User`,
    content: `By confirming this Anuja kumari wouldn't be able to:`,
    looseAccessOver: ['Access any Projects related to this Account','Any Personal Data Synced with this Account']
  };
  // it will 
  

  // handles the response from alert component
  manageButton(event:any){
    console.log(event);
    this.alertStatus=false;
  }

    // tab names are added to an array and sending it to child componenet
    tabNames:string[]=['joined', 'suggestions'];

    // toast Data is being intialized here
    dataToToast : toastInfo = {
      toastType:'error',
      messagetoDisplay:'Invalid username',
      toastDisplayTime:2000
    }
}
