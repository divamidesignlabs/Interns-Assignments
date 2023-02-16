import { Component, Output, Input } from '@angular/core';
import { toastInfo } from 'src/app/interfaces/alertInterface';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent {

  @Input() dataToToast: toastInfo={
    toastType:'',
    messagetoDisplay:'',
    toastDisplayTime:0
  }

}
