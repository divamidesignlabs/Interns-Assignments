import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Toast } from 'src/app/models/interfaces';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})

// it will take Toast model as input
// if toast type is success => green box
// if toast type is error => red box
// if toast type is info => blue box
// emit a boolean value 
 
export class ToastComponent  implements OnInit{
  @Output() disappear= new EventEmitter<boolean>();
  @Input() toast:Toast={
    msg: '',
    type: '',
    timeout:0
  }
  ngOnInit(): void {
    console.log(this.toast);
    setTimeout(()=>{
      this.disappear.emit(false)
    },this.toast.timeout);
    console.log("I am done",setTimeout);
  }

  handleDisappear(){
    this.disappear.emit(false);
  }

}
