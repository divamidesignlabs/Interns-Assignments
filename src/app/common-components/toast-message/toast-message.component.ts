import { Component,Input ,Output,OnChanges, OnInit, EventEmitter} from '@angular/core';
import { Toast } from 'src/app/model/consts';
@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent  implements OnInit{
  @Input() toastMsg:Toast={
    type: '',
    msg: '',
    time: 0
  };
  @Input() toastMsgStatus:boolean=false;
  @Output() toastStatus=new EventEmitter<boolean>();
    ngOnInit(){
      // console.log("t",this.toastMsg);
      setTimeout(()=>{
      this.toastMsgStatus=false;
      this.toastStatus.emit(false);
      },
      this.toastMsg.time);
      // console.log("t",this.toastMsg);
    }
    handleClick(){
      this.toastStatus.emit(false);
    }
  }

