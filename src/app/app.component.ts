import { Component } from '@angular/core';
import { HeaderComponent } from './common-components/header/header.component';
import{ AlertInterface } from 'src/app/modles/common modles';
import { AlertMessageComponentComponent } from './common-components/alert-message-component/alert-message-component.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QarmaDemoProject';
 
  
  //.................. common alert component starts......................................

  // declorations
  ButtonContent=false;
  alertMessage=false;
  
  // button is clicked it will show alertmessage component
  AlertMessage(){
    this.alertMessage=true;
  }
  
  alertContentData:AlertInterface={
    Optiontype:'Remove user',
    question:'Are you sure you want to Remove the user?',
    label:'Anuja Kumari',
    decription:"By Confirming this Anuja Kumari wouldn't be able to:",
    description_points:['1.Access any Projects related to this Account','2. Any Personal Data Synced with this Account']
  };

  buttons: string[] = [ 'Cancel', 'button'];
  selectedButtonIndex: number | undefined;

  handleButtonClicked(index: number): void {
    this.selectedButtonIndex = index;
    console.log(this.selectedButtonIndex )
    if(index==0 || index==1){
      this.alertMessage=false;

    }
    if(index==1){
      this.ButtonContent=true
    } 
    
  }
  //......common alert component ends.........

  // -------------------------------------------------------------------------------------------------------------
  // common tab component
  tabItems = [
    { label: 'Joined', value: 'Joined' },
    { label: 'Requested', value: 'Requested' },
    { label: 'Suggested', value: 'Suggested' },
  ];

  isselected = 'item'; 
  tabContent = [  { value: 'Joined', content: 'Joined content div' },  { value: 'Requested', content: 'Requested content div' },  { value: 'Suggested', content: 'Suggested content div' },];

  // ...........toast component starts...................................
  message: { type: string; msg: string; } | undefined;
  displayMessage() {
    this.message = {
      type: 'info',
      msg: 'This is a success message'

    };
  }






}
