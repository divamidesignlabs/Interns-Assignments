import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventType } from '@angular/router';
import { headerListI } from 'src/app/Interfaces/interface';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
@Input() tabsList : headerListI[] = []

@Output() sendSelectedItem = new EventEmitter();

getClickedItem(item:any){
  for(let otherItems of this.tabsList) {
    otherItems.isSelected = false;
  }
    item.isSelected = true;
    this.sendSelectedItem.emit(item);
}

}
