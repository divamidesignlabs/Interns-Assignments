import { Component,EventEmitter,Input, Output,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() toastAction:any;
  @Output() toastStatusFun = new EventEmitter ();

  ngOnInit(){
    setTimeout(() => {
      this.toastStatusFun.emit(false)
    },this.toastAction.delay);
  }
  
  emitStatus(){
    this.toastStatusFun.emit(false);
  }
  

}
