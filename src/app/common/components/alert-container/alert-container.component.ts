import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Alert } from 'src/app/models/interfaces';

@Component({
  selector: 'app-alert-container',
  templateUrl: './alert-container.component.html',
  styleUrls: ['./alert-container.component.scss']
})

// this component accepts Alert Interface as input 
// and it emits a boolean value as response
// true --- user confirm the action
// false --- user refuse the action

export class AlertContainerComponent {
  @Output() status=new EventEmitter<boolean>();
  @Input() alert: Alert = {
    alert_type: '',
    label: '',
    toConfirmMessage: '',
    content: '',
    rightsGoingToLoss: []
  }


  handleButtonStatus(param:any){
    console.log("checked",param);
    if (param==="Cancel")
      this.status.emit(false);
    else if(param==="Confirm")
      this.status.emit(true);
    else
      this.status.emit(false);
  }
}