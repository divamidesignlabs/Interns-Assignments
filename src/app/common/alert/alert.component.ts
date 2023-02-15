import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
@Input() data:any;
  getAccess:boolean=false
  activateAlert(event:any)
  {
    console.log(event);
    this.getAccess=true
  }
  cancel()
  {
    this.getAccess=false
  }
}
