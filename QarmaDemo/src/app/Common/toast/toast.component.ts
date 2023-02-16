import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() inputToToast :any
  @Output() isPopup = new EventEmitter();

  ngOnInit(){
    this.inputToToast.title == 'Successful';
    
    this.inputToToast.logo = "/assets/images/svg/successTickLogo.png"

    setTimeout(() => {
      this.isPopup.emit(false); // you can handle this function in parent to collapse the toast after 2seconds
    },2000);
    
  }
 
}
