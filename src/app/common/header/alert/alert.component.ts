import { Component, Output, Input, EventEmitter } from '@angular/core';
import { AlertInfo } from 'src/app/interfaces/alertInterface';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Output() status=new EventEmitter<boolean>();
  @Input() alertData: AlertInfo = {
    alertType: [],
    label: '',
    toConfirmMessage: '',
    content: '',
    looseAccessOver: []
  }

  alertStatus:boolean=false;

  handleAlert(){
    this.alertStatus=true;
  }


  buttonStatus(parameter:any){
    
    if (parameter==="Cancel")
      this.status.emit(false);
    else if(parameter==="Remove")
      this.status.emit(true);
    else
      this.status.emit(false);
    this.alertStatus=false;

    console.log("button status",parameter);
  }
}

