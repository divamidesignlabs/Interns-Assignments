import { Component, Input } from '@angular/core';
import { HeaderComponent } from './common-components/header/header.component';
import { CommonTabsComponent } from './common-components/common-tabs/common-tabs.component';
import { AlertMessageComponent } from './common-components/alert-message/alert-message.component';
import { Alert } from './model/consts';
import { Toast } from './model/consts';
import { ToastMessageComponent } from './common-components/toast-message/toast-message.component';
import { UserDataServiceService } from './Services/user-data-service.service';
import { UserDetails } from './model/consts';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectQarma';
  userData:UserDetails[]=[];
  userDataHeadings:Array<string>=[];
  // give type:error/info/success  and message to display and time-how many seconds the toast should display
  toastData:Toast={type:'error',msg:'Successfully Done!!',time:2000};
  //
  showtoastDataStatus:boolean=false;
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

  constructor(private userDetails:UserDataServiceService){}
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
  joinedContent={'content':'This is Joined Content'};
  requestedContent={'content':'This is Requested Content'};
  suggestionsContent={'content':'This is Suggestions Content'};
  tabContent:any=this.joinedContent.content;
  // tabs data ends
  showtoastData(){
    this.showtoastDataStatus=true;
  }
  handleToastStatus(event:boolean){
    this.showtoastDataStatus=false;
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
  ngOnInit(){
    this.userDetails.getUserDetails().subscribe((details)=>{
      this.userData=details;
      this.userDataHeadings=Object.keys(this.userData[0]);
    })
    
  }
}
