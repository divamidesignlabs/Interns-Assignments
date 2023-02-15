import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-tabs',
  templateUrl: './common-tabs.component.html',
  styleUrls: ['./common-tabs.component.scss']
})
export class CommonTabsComponent {
  @Output() sendButtonClicked=new EventEmitter<string>();
  isSelected:{[key:number]:boolean}={0:true};
  @Input() headerList:Array<string>=[];
  // handling the click event on tabs
  handleClick(index:number){
    // isSelected using for identifying selected tab and for giving underline
    for(let i in this.isSelected){
      this.isSelected[i]=false;
    }
    this.isSelected[index]=true;
    // console.log("clicked: ",this.isSelected);
    this.sendButtonClicked.emit(this.headerList[index]);
  }
}
