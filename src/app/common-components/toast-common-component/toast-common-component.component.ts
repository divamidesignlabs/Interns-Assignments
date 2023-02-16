import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-common-component',
  templateUrl: './toast-common-component.component.html',
  styleUrls: ['./toast-common-component.component.scss']
})
export class ToastCommonComponentComponent {
  @Input() toastMsg: any; // Define the input property to receive data from the parent component
  toastMsgStatus = true;
  
}
