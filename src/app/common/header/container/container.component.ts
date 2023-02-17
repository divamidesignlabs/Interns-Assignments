import { Component, EventEmitter, Input, Output } from '@angular/core';
import { containerInfo } from 'src/app/interfaces/alertInterface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  // to get the componet dynamic data required
  @Input() welcomePageContainerData: containerInfo=
  {
    imgSrc:'',
    contentoDisplay:''
  }

  // to send navigation status to the parent
  @Output() navigationStatus = new EventEmitter<boolean>();


  // set navigation status as true and emit it to the parent
  sendNavigationStatusToParent()
  {
      this.navigationStatus.emit(true);
  
  }
  
}
