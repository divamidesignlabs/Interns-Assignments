import { Component, EventEmitter, Input, Output } from '@angular/core';
import { popUp } from 'src/app/routingcomponents/components/project-listing-component/project-listing-component.component';

@Component({
  selector: 'app-pop-upcomponent',
  templateUrl: './pop-upcomponent.component.html',
  styleUrls: ['./pop-upcomponent.component.scss']
})
export class PopUpcomponentComponent {
  @Input() popUpInputObject?: popUp;
  @Output() buttonStatusEmitter = new EventEmitter<string>();
  submit : boolean = true;
  ngOnInit(){
    // console.log(this.popUpInputObject);
  }
  sendButtonStatus(status:any){
    this.buttonStatusEmitter.emit(status);
    console.log("sendStatus value------",status);
    this.submit = false;
  }
}
