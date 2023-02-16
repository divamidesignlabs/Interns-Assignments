import { Component ,Input ,Output,EventEmitter } from '@angular/core';
import{alertIntializations} from '../interface/interface'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
   @Input() popMsg :alertIntializations={
     action: '',
     question: '',
     nameofThePerson: '',
     suggestions: '',
     suggestion1:'',
     suggestion2:''
   }
   @Output() alertMsgStatus= new EventEmitter();
   closepopupMsg:boolean=false
   closeAlertMsg(){
    this.closepopupMsg=true;
    this.alertMsgStatus.emit(this.closepopupMsg)
   }
}
