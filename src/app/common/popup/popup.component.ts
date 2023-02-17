import { Component, Input } from '@angular/core';
import { Alert } from '../Interfaces/interface';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent {
  @Input() popupData:any
  modal:any ;

// When the user clicks the button, open the popUp 
popUp() {
  this.modal=document.getElementById("myModal");
  this.modal.style.display = "flex";
}

closePopUp() {
  this.modal.style.display = "none";
}
alertType:string='Remove User'
}
