import { Component,EventEmitter,Output, SimpleChange  } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { popupInterface } from 'dataInterface';
// export interface popupInterface{
//   alertImg?:string,
//   heading?:string,
//   question?:string,
//   userName?:string,
//   confirmation?:string,
//   list?:Array<string>,
//   buttons?:Array<string>
  
// }
interface toastInterface{
  img:string,
  heading:string,
  message:string,
  delay:number
}
@Component({
  selector: 'app-project-listing-default',
  templateUrl: './project-listing-default.component.html',
  styleUrls: ['./project-listing-default.component.css']
})
export class ProjectListingDefaultComponent {
//  userName="afff";
popupRemove:popupInterface={
  alertImg:"/assets/images/warning.svg",
  heading:"Remove User",
  question:"Are you sure want to Remove User?",
  userName:"abcd",
  confirmation:"By confirming this abcd wouldn't be able to:",
  list:["Access any projects related to this Account.","Any Personal Data linked with this Account."],
  buttons:["cancel","remove"] 
}
toast:toastInterface={
  img:"",
  heading:"",
  message:"",
  delay:3000
}
// card1={
//   path:"/assets/images/explore.svg",
//   brief:"Explore sample project"
// };
// card2={
//   path:"/assets/images/create.svg",
//   brief:"Create new project"
// }
navList:Array<string>=[""]
 popup=0;
 toastStatus=false;
 constructor(private router:Router, private ser:ServiceService){}
 remove(){
  this.popup=1;
 }
 details(){
  this.router.navigate(['profileDetails']);
 }
 toastSuccessFun(){
    this.toastStatus=true;
    this.toast.img="/assets/images/Success.svg";
    this.toast.heading="Success";
    this.toast.message="Successful";
    // this.toast.delay=1000;

 }
 toastWarningFun(){
  this.toastStatus=true;
  this.toast.img="/assets/images/warning.svg";
  this.toast.heading="Warning";
  this.toast.message="There was network problem";
  // this.toast.delay=2000;
 }
 toastErrorFun(){
  this.toastStatus=true;
  this.toast.img="/assets/images/error.png";
  this.toast.heading="Error";
  this.toast.message="Something wrong";
  // this.toast.delay=3000;
 }
 popupAction(event:any){
  if(event=="cancel")
  {
    this.popup=0;
  }
 }
 receiveStatus(val:boolean){
  this.toastStatus=val;
 }
projectCreationForm(){
  this.navList.push("projectCreationForm")
  this.router.navigate(['projectCreationForm'],{state:{navList:this.navList}})
}
}
