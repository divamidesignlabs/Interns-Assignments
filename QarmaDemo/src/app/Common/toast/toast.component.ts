import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() inputToToast :any

  ngOnInit(){
    this.inputToToast.title == 'Successful';
    
    this.inputToToast.logo = "/assets/images/svg/successTickLogo.png"
    
  }
 
}
