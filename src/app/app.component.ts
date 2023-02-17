import { Component, OnInit} from '@angular/core';
import { HeaderComponent } from './common/header/header.component';
import { AlertInfo, tabsInfo, toastInfo, containerInfo } from './interfaces/alertInterface';
import { ShareUserDataService } from './share-user-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  // injecting service here
  constructor(private dataService:ShareUserDataService){}

  userDetails:any[]=[];

  ngOnInit(): void
  {

  // get user details from userdetails.json.
  this.dataService.getUserData().subscribe((data) => { 
    {
      this.userDetails=data;
      console.log("data",data,this.userDetails)
    }
  })
  }

  title = 'Qarma UI';
  
  // 
  alertStatus:boolean=true;
  toastStatus:boolean=false;
  showUserDataStatus:boolean=false;
  
  // popup data is intialized here
  popupData: AlertInfo = 
  {
    alertType: ['Remove User', 'cancel'],
    label: 'Anuja kumari',
    toConfirmMessage:`Are you sure you want to Remove User`,
    content: `By confirming this Anuja kumari wouldn't be able to:`,
    looseAccessOver: ['Access any Projects related to this Account','Any Personal Data Synced with this Account']
  };
  

  // toast Data is being intialized here
  dataToToast : toastInfo = 
  {
    toastType:'error', // it can be "error" or "success" or "general"
    messagetoDisplay:'Invalid username EFFEWhjvasjhbiABDIABJCJHCHJ CHJ CJHC AHC AIHCBHSBAH',
    toastDisplayTime:5000
  }

  welcomePageContainerData:containerInfo = 
  {
    imgSrc:"assets/images/container-imgs/container-search.svg",
    contentoDisplay: "Explore sample project",
  }
  

  // handles the response from alert component
  manageButton(event:any)
  {
    console.log(event);
    this.alertStatus=false;
    
  }

    // tab names are added to an array and sending it to child componenet
    tabNames:string[]=['joined', 'suggestions', 'Future Additions'];

    

    // update toast status when we click on the toast button.
    updateToastStatus()
    {
        this.toastStatus=true;
    }

    // update toast taste that we get from the toast component.
    getToastStatus()
    {
      this.toastStatus=false;
    }

    showUserData()
    {
        this.showUserDataStatus=true;
        console.log("show data")
    }


}
