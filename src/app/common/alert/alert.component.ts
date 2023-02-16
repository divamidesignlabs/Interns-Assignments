import { Component, Input } from '@angular/core';
import { PassData } from 'src/app/interfaces/pass-data';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() data!: PassData;
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
