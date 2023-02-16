import { Component,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-joinedtabs',
  templateUrl: './joinedtabs.component.html',
  styleUrls: ['./joinedtabs.component.css']
})
export class JoinedtabsComponent {
 @Input() tabslist:string[]=[];
 @Output() ontabchange =new EventEmitter<number>();
 activatedTab:number=-1;
 setTab(index:number){
 this.activatedTab=index;
 this.ontabchange.emit(this.activatedTab)
 }
 /*[(ngmodel)]=activatedTab
 (change)='onselectedtabchanged()'
 @output()
     ontabchange:eventemitter<any>=new eventemitter<any>//customevent...import
     onselectedtabchanged(){
      this.ontabchange.emit(this.activatedTab)
      console.log(this.activatedTab)
     }//create method toraise the event
     parentclasss ..........propertytokeeptrack:number=-1
     tabchanged(data:string){
      propertytokeeptrack:number=-1//to keep track of selected tab
     }
     html.....( onselectedtabchanged)='tabchanged($event)'
     */

  }
