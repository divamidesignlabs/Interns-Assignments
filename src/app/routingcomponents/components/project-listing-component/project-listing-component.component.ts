import { Component } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ServiceService } from 'src/app/service.service';
>>>>>>> Stashed changes

export interface popUp{
  logo : string;
  heading : string;
  question ?: string;
  name ?: string;
  conformationMessage ?: string;
  conformationMessageList  ?: string[];
  buttons ?: string[];
}
 export interface toast{
  logo : string;
  heading : string;
  message : string ;
  time ?: 3000;
 }

<<<<<<< Updated upstream
=======
 export interface dataTable{
  Id: number,
  FirstName : string,
  LastName : string,
  Age : number,
  PhoneNumber : string,
  Gender : string,
 }

>>>>>>> Stashed changes
@Component({
  selector: 'app-project-listing-component',
  templateUrl: './project-listing-component.component.html',
  styleUrls: ['./project-listing-component.component.scss']
})
export class ProjectListingComponentComponent {
  sampleUrl : string = "/assets/images/ExploreSampleproject.svg";
  sampleInput : string ="Explore Sample project";
  createUrl : string = "/assets/images/createnewproject.svg";
  createInput : string ="Create New project";
  tabArray : any=["Joined", "Suggested"];
  joined = [{ name : "Qarma Testing Group", url : "/assets/images/testing.svg"},{ name : "New Projects Team", url : "/assets/images/newproject.svg"},
             { name : "Qarma Backend Team", url : "/assets/images/Qarma.svg"}, { name : "Automation Testing Team", url : "/assets/images/Automation.svg"},
              { name : "Manual Testing Group", url : "/assets/images/manual.svg"}];
  suggested = [{ name : "Production Team", url : "/assets/images/manual.svg"}, {name : "Deployement Team", url : "/assets/images/Qarma.svg"}, {name : "API Creation Group", url : "/assets/images/Apigroup.svg"}];
  joinedStatus : boolean = true;
  suggestionStatus : boolean = false;
  deleteStatus : boolean = false;
  removeStatus : boolean = false;
  inputToToast ?: toast;
  successButtonLabel : string ="Success";
  infoButtonLabel : string ="Information";
  errorButtonLabel : string ="Error";
  toastStatus : boolean = false;
<<<<<<< Updated upstream

=======
  dataInTable : any;

  constructor( private serve : ServiceService){

  }

  ngOnInit(){
    this.serve.getDataFromDB().subscribe((res)=>{
      this.dataInTable = res;
      console.log("this is after recevindsjfsa", this.dataInTable, res);
    });

  }
   
>>>>>>> Stashed changes

  remove : popUp={
    logo :"/assets/images/alert.svg",
    heading : "Remove User",
    question : "Are you sure you want to Remove User",
    name : "G Phawhan Saii",
    conformationMessage : "By confirming this G Phawhan Saii wouldn't be able to:",
    conformationMessageList : ["Access any Projects related to this Account", "Any Personal Data Synced with this Account"],
    buttons :[ "Remove", "Cancel"]

  }

  delete : popUp={
    logo :"/assets/images/alert.svg",
    heading : "Delete Organizational Account",
    question : "Are you sure you want to Delete your Account?",
    name : "G Phawhan Saii",
    conformationMessage : "By Confirming this You would not be able to:",
    conformationMessageList : ["Access any Projects related to this Account", "Any Data Synced with this Account",
     "You will lose access to susbcription you bought with this account", "All Account Members would be removed from the account."],
     buttons :[ "Delete", "Cancel" , "Reset" , "Add"]
  }

  infoInputToToast : toast={
    logo :"/assets/images/info-toast.png",
    heading : "Information",
    message : "This is the Information message...."
  }

  errorInputToToast : toast={
    logo : "/assets/images/alert.svg",
    heading : "Error",
    message : "This is the Error message...."
  }

  successInputToToast : toast={
    logo :"/assets/images/success-toast.jpg",
    heading : "Successful",
    message : "This is the Success message...."
  }
  getPopUpStatus(val:any){
    this.removeStatus=false;
    this.deleteStatus=false;
    console.log(val);
  }

  getTabStatus(val:any){
    console.log(val);
  }

  deleteButton(){
    this.deleteStatus=true;
    this.removeStatus=false;
  
  }
  removeButton(){
    this.removeStatus=true;
    this.deleteStatus=false;
  
  }

  toastButtton(label:string){
    if(label=="Error"){
      this.inputToToast = this.errorInputToToast;
    }
    else if(label=="Information"){
      this.inputToToast = this.infoInputToToast;
    }
    else if(label == "Success"){
      this.inputToToast = this.successInputToToast;
    }
    this.toastStatus=true;
  }
  receiveToastStatus(val:boolean){
    this.toastStatus=val;
  }
}
