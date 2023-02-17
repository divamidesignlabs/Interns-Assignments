import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alert } from 'src/app/model/consts';
@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent {
  @Output() sendButtonStatus = new EventEmitter<boolean>();
  // constructor(private alert:Alert){}
  @Input() alertData: Alert={
    alert: '',
    question: '',
    label: '',
    content: '',
    descr: []
  };
  isConfirmSelected =true;
  @Input() showAlert=false;
  
  // handling the button selected (canceled action or confirmed it)
  // using for changing background for selected button for now
  handleClick(btn:any){
    this.showAlert=false;
    console.log("clicked cancel or remove: ",this.showAlert);
    if(btn==='cancel'){
      this.isConfirmSelected=false;
      
    }
    if(btn==='confirm'){
      this.isConfirmSelected=true;
    }
    this.sendButtonStatus.emit(this.isConfirmSelected);
    this.isConfirmSelected =true;
    
  }
}
