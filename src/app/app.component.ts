import { Component } from '@angular/core';
import { Alert, tabLabels, toast } from './common/Interfaces/interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qarmaui';
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
    {image:'assets\pop-up-images\caution.svg',status:'Success',message:'Submitted'},
    {image:'assets\pop-up-images\caution.svg',status:'Failed',message:'Failed'},
    {image:'assets\pop-up-images\caution.svg',status:'Loading',message:'Pending'}
  ]
  toastExist:boolean=false
  showToast(){
    this.toastExist=true
  }
  fun(status:any){

    this.toastExist=status
  }

}