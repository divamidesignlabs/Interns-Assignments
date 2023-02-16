import { Component, Input } from '@angular/core';
import { containerInfo } from 'src/app/interfaces/alertInterface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  @Input() welcomePageContainerData: containerInfo=
  {
    imgSrc:'',
    contentoDisplay:''
  }
  
}
