import { Component } from '@angular/core';
// import { Alert, tabLabels, toast,header } from './common/Interfaces/interface';
// import { DatabaseService } from './database.service';
import { Alert, tabLabels, toast,header } from 'src/app/common/Interfaces/interface';
import { DatabaseService } from 'src/app/database.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private database:DatabaseService){}
  title = 'qarmaui';
  toastExist:boolean=false
  users = new Array<any>()
  usersArray = new Array<any>()
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
    {image:`assets/images/schedules.svg`,status:'Success',message:'Submitted'},
    {image:`assets/images/schedules.svg`,status:'Failed',message:'Failed'},
    {image:`assets/images/schedules.svg`,status:'Loading',message:'Pending'}
  ]

  showToast(){
    this.toastExist=true
  }
  toastStatus(status:any){

    this.toastExist=status
  }

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
