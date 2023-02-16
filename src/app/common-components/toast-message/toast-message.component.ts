import { Component,Input ,Output,OnChanges, OnInit, EventEmitter} from '@angular/core';
import { Toast } from 'src/app/model/consts';
@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent  implements OnInit{
  @Input() toastData:Toast={
    type: 'error', // included types: 'success', 'error', 'info'
    msg: '', // anyn string
    time: 0 // number of milliseconds
  };
  @Input() toastDataStatus:boolean=false;
  @Output() toastStatus=new EventEmitter<boolean>();
    ngOnInit(){
      // console.log("t",this.toastData);
      setTimeout(()=>{
      this.toastDataStatus=false;
      this.toastStatus.emit(false);
      },
      this.toastData.time);
      // console.log("t",this.toastData);
    }
    handleClick(){
      this.toastStatus.emit(false);
    }
  }

