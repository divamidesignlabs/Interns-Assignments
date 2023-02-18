import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  activatedTab:number=-1;
  @Input() tabslist=[]
  @Output() ontabchange =new EventEmitter<number>();
  setTab(index:number): void{
  this.activatedTab=index;
  this.ontabchange.emit(this.activatedTab)
  }
}
