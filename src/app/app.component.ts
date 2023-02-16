import { Component } from '@angular/core';
import { Alert, tabLabels, toast,header } from './common/Interfaces/interface';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(private database:DatabaseService){}
  title = 'qarmaui';
  headerList:header[]=[
    {
      image:`assets/images/dashboard.svg`,
      alt:'DashBoard',
      label:'Dashboard'
    },
    {
      image:`assets/images/projects.svg`,
      alt:'Projects',
      label:'Projects'
    },
    {
      image:`assets/images/schedules.svg`,
      alt:'Schedules',
      label:'Schedules'
    },
    {
      image:`assets/images/settings.svg`,
      alt:'Settings',
      label:'Settings'
    },
    {
      image:`assets/images/knowledge hub.svg`,
      alt:'Knowledge hub',
      label:'Knowledge hub'
    }

  ]
  AlertData:Alert={
    alert:'Remove user',
    question:'Are you sure you want to Remove the user',
    label:'Anuja Kumari',
    content:"By Confirming this Anuja Kumari wouldn't be able to:",
    description:['1.Access any Projects related to this Account','2. Any Personal Data Synced with this Account']
    
  };
  tabLabels:tabLabels[]=[
    {label:'Joined'},
    {label:"Suggetions"},
    {label:"Suggetions"},
    {label:"Suggetions"}
  ];
  // Joined:any=[{
  //   teamImage:'\assets\joined-images\testingGroup.svg'
  // }]
  labelTabData=['C1','C2','C3']
  toastData:toast[]=[
    {image:`assets/pop-up-images/caution.svg`,status:'Success',message:'Submitted'},
    {image:`assets/pop-up-images/caution.svg`,status:'Failed',message:'Failed'},
    {image:`assets/pop-up-images/caution.svg`,status:'Loading',message:'Pending'}
  ]
  toastExist:boolean=false
  showToast(){
    this.toastExist=true
  }
  toastStatus(status:any){

    this.toastExist=status
  }
  users = new Array<any>()
  usersArray = new Array<any>()
  ngOnInit() {
    this.database.getDatabaseData().subscribe((response) => {
        this.users = response;
        console.log('rresponse',response);
    },(error)=>{console.log('error')},
    ()=>{
      this.usersArray=this.users
      console.log(this.usersArray)
    });
  }

}