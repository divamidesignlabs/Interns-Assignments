import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input() dataToPopup:any;

  popUpVisibility:boolean=false;
  onClick(){
    this.popUpVisibility = true;
  }
  cancelPopUp(){
    this.popUpVisibility = false;
  }
}
