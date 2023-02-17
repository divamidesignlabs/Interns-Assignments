import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
 @Input() card:any;
 @Output() sendAction=new EventEmitter();
 action(val:any){
  this.sendAction.emit(val)
 }
}
