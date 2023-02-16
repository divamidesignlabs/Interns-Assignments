import { Component,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-joinedtabs',
  templateUrl: './joinedtabs.component.html',
  styleUrls: ['./joinedtabs.component.css']
})
export class JoinedtabsComponent {
 @Input() tabslist:string[]=[];//data from parentcomponent(parenttabs) to childComponent
 @Output() ontabchange =new EventEmitter<number>();
 activatedTab:number=-1;
 setTab(index:number){
 this.activatedTab=index;
 this.ontabchange.emit(this.activatedTab)
 }
  }
