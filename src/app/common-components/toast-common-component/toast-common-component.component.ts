import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Toast } from 'src/app/modles/common modles';

@Component({
  selector: 'app-toast-common-component',
  templateUrl: './toast-common-component.component.html',
  styleUrls: ['./toast-common-component.component.scss']
})
export class ToastCommonComponentComponent {
  @Output() closeToast = new EventEmitter<any>();
  @Input() toastMsg: Toast={
    type: '',
    msg: ''
  } 
  // Define the input property to receive data from the parent component
  toastMsgStatus = true;
  
  onClose() {
    
    this.closeToast.emit();
  }
  
}
