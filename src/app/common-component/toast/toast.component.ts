import { Component, EventEmitter, Input,OnInit,Output } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() toastContent:any;
  @Output() toastStatus = new EventEmitter<boolean>()
  toastVisibility:boolean=true;

  ngOnInit(){
    setTimeout(()=>{
      this.toastVisibility=false;
      this.toastStatus.emit(this.toastVisibility)
    }, this.toastContent.toastTime)
  }
  
  toastCancel(){
    this.toastVisibility = false,
    this.toastStatus.emit(this.toastVisibility)
  }
}
