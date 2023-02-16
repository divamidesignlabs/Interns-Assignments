import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input() dataToPopup:any;
  @Output() popUpStatus = new EventEmitter<boolean>()

  popUpVisibility:boolean=false;

  cancelPopUp(){
    this.popUpVisibility = false;
    this.popUpStatus.emit(this.popUpVisibility)
  }
}
