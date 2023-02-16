import { Component, EventEmitter, Input, Output } from '@angular/core';
import { popupDataI } from 'src/app/Interfaces/interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
@Input() popupData : popupDataI = { 
  title:'',
  name:'',
  submitButton:'',
  conformationData:''  
}
@Output() sendButtonAction = new EventEmitter();

cancelClicked(){
  this.sendButtonAction.emit(false);
}
submitClicked(){
  this.sendButtonAction.emit(true);
}



}


// to use this common component you have to pass the data as followed i.e, by refering to below given interface
// export class popupDataI{
//   id : number = 1
//   title : string =''
//   name : string = ''
//   submitButton = ''
//   conformationData : object[] = []

// }