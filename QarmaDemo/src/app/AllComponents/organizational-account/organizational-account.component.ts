import { Component } from '@angular/core';
import { headerListI, popupDataI } from 'src/app/Interfaces/interface';

@Component({
  selector: 'app-organizational-account',
  templateUrl: './organizational-account.component.html',
  styleUrls: ['./organizational-account.component.scss']
})
export class OrganizationalAccountComponent {

  tabsList:headerListI[]=[
    {
      id : 1,
      isSelected : true,
      label : 'Joined'
    },
    {
      id : 2,
      isSelected : false,
      label : 'Suggestions'
    }
  ];

  sendPopupData : popupDataI ={
    title : 'Remove User',
    name : 'Anuja kumari',
    submitButton : 'Remove User',
    conformationData : [
      {id : 1, content : 'Access any Projects related to this Account'},
      {id : 2, content : 'Any Personal Data synced with this Account'}
    ]

  };

showSelectedcontent = 'Joined' //default it will be joined
  getSelectedItem(event : any){
    this.showSelectedcontent = event.label;
  }

JoinedData = [
  {id : 1, name : 'Anuja'},
  {id : 2, name : 'kiran'}
];

SuggestionsData = [
  {id : 3, name : 'sikha'},
  {id : 4, name : 'shreya'}
];

item:any;
showAlert = false;
deleteClicked(item:any){
  this.item = item;
  this.showAlert = true;
}

addClicked(item:any){
  this.JoinedData.push(item);
  this.SuggestionsData.splice(item,1);
}

recievedButtonAction(action:boolean){
  this.showAlert = false;
  if(action == true){
    this.SuggestionsData.push(this.item);
    this.JoinedData.splice(this.item,1);
  }
}

inputToToast = {
  title : 'Successful',
  logo : '',
  message : ''
}


}
