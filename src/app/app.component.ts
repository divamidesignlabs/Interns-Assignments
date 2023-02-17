import { Component } from '@angular/core';
import { notify, tabsLabel,toast } from './common-component/interfaces/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Qarma';
  popUpActivation:boolean = false;
  showPopUp(){
    this.popUpActivation = true;
  }
  recievedPopUpStatus(){
    this.popUpActivation = false;
  }
  //popup data that should be visible in common popup component. 'notify' is an interface
  // popUpData:notify = {
  //   nameType:'Remove User',
  //   confirmation:'Are you sure you want to remove user',
  //   nameOf:'Anuja Kumari',
  //   unableTo:'By confirming this anujakumari wont be able to:',
  //   unableData:['1. Access any projects related to this Account','2. Any personal data synced to this Account'],
  //   button1:'Cancel',
  //   button2:'Remove User'
  // }
  popUpData:notify = {
    nameType:'Delete Organizational Account',
    confirmation:'Are you sure you want to Delete your Account',
    nameOf:'Qarma Backend Team',
    unableTo:'By confirming this you wont be able to:',
    unableData:['1. Access any projects related to this Account','2. Any data synced to this Account','3.You will lose access to subscription you bought with this account','4.All acount memebers would be removed from the account'],
    button1:'Cancel',
    button2:'Delete Account'
  }
  //the common tabs which are required.
  tabs : tabsLabel[]= [
    {label:' Joined'},
    {label:' Suggestions'},
    {label:' Requests'}   
  ]
  // data in the each common tabs
  tabLabelsContent = ['This is Joined','This is Suggestions','This is requests'];

  //Toast data which is sending to toastcomponent
  toastLabels:toast = {
    toastTitle:'success',
    toastMessage:'action is successful',
    toastTime:3000
  }
  //Initially toastcomponent is set to false
  toastActivation:boolean=false;
  // after clicking the button, the toast component is visible
  showToastStatus(){
    this.toastActivation=true;
  }
  //This status is came from the child
  recievedToastStatus(){
    this.toastActivation = false
  }
}
