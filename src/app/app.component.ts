import { Component, Input } from '@angular/core';
import { HeaderComponent } from './common-components/header/header.component';
import { CommonTabsComponent } from './common-components/common-tabs/common-tabs.component';
import { AlertMessageComponent } from './common-components/alert-message/alert-message.component';
import { Alert } from './model/consts';
import { Toast } from './model/consts';
import { ToastMessageComponent } from './common-components/toast-message/toast-message.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectQarma';
  
  toastMsg:Toast={type:'info',msg:'venu',time:2000};
  showToastMsgStatus:boolean=false;
  // alert data:---------------------------
  alert=false;
  showConfirmationData:boolean=false;
  sendAlertData:Alert={
    alert:'Remove user',
    question:'Are you sure you want to Remove the user',
    label:'Anuja Kumari',
    content:"By Confirming this Anuja Kumari wouldn't be able to:",
    descr:['1. Access any Projects related to this Account','2. Any Personal Data Synced with this Account']
  };
  showAlert(){
    this.alert=true;
    console.log("show alert function upon button click: ",this.alert);

  }
  handleButtonEvent(status:any){
    if(status)
    {
    this.showConfirmationData=true;
    this.alert=false;
    }
    else{
      this.showConfirmationData=false;
      this.alert=false;
    }
    console.log("confirm",this.alert);
  }
  // alert data end
  // --------------------------------------- 
  // tabs data
  headerList:Array<string>=['Joined','Required','Suggestions'];
  joinedContent={'content':'This is Joined Content','isSelected':true};
  requestedContent={'content':'This is Requested Content','isSelected':false};
  suggestionsContent={'content':'This is Suggestions Content','isSelected':false};
  tabContent:any=this.joinedContent.content;
  // tabs data ends
  showToastMsg(){
    this.showToastMsgStatus=true;
  }
  handleToastStatus(event:boolean){
    this.showToastMsgStatus=false;
    console.log("app",event);
  }

  showContent(event:string){
    switch(event){
      case 'Joined':
        this.tabContent=this.joinedContent.content;
        break;
      case 'Required':
        this.tabContent=this.requestedContent.content;
        break;
      case 'Suggestions':
        this.tabContent=this.suggestionsContent.content;
        break;
    }
  }
}
