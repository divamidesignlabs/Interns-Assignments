import { Component, Output, Input, OnInit, EventEmitter} from '@angular/core';
import { toastInfo } from 'src/app/interfaces/alertInterface';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent implements OnInit {

  @Input() dataToToast: toastInfo={
    toastType:'',
    messagetoDisplay:'',
    toastDisplayTime:0
  }

  @Output() sendToastStaus = new EventEmitter;

  toastStatus:boolean=true;

  ngOnInit(): void 
  {
    setTimeout(() => 
    {

      this.toastStatus=false;
      this.sendToastStaus.emit(this.toastStatus);
      
    }, this.dataToToast.toastDisplayTime);
    
  }

  timeOut()
  {
    this.toastStatus=false;
    this.sendToastStaus.emit(this.toastStatus)
  }

  

  

  

}
