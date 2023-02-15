import { Component, Input, Output, EventEmitter} from '@angular/core';
import { toast } from 'src/app/routingcomponents/components/project-listing-component/project-listing-component.component';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
@Input() inputToToast?: toast;
@Output() toastStatus = new EventEmitter ();
 
ngOnInit(){
  let time = this.inputToToast?.time ?? 3000;
  setTimeout(()=>{
    this.toastStatus.emit(false);
  },time);
}

}
