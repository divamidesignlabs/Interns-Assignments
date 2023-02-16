import { Component,EventEmitter,Input, Output,  } from '@angular/core';
import { toast } from '../Interfaces/interface';
// import{ngOnInit} from '@angular/core'

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() toastExist:boolean=true
  @Output() status=new EventEmitter<boolean>()
  @Input() toastData:toast[]=[{
    image: '',
    status: '',
    message: ''
  }]
  ngOnInit(){
    setTimeout(() => {
      this.toastExist=false
      // console.log('toastFunction')
      this.status.emit(this.toastExist)
    },2500);
  }
  
}
