import { Component,EventEmitter,Input, Output } from '@angular/core';
// import { popupInterface } from 'src/app/project-listing-default/project-listing-default.component';
@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.css']
})

export class PopUpsComponent {
  // @Input() removeUserName:any;
  @Input() alert:any;
  @Output() sendAction= new EventEmitter();
  // pop=1;
  // cancel(){
  //   this.pop=0;
  // }
  action(event:any){
   this.sendAction.emit(event);
  }
  
}
