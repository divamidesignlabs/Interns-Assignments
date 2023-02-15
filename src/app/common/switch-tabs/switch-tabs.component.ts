import { Component,Input } from '@angular/core';
import { tabLabels } from '../Interfaces/interface';

@Component({
  selector: 'app-switch-tabs',
  templateUrl: './switch-tabs.component.html',
  styleUrls: ['./switch-tabs.component.scss']
})
export class SwitchTabsComponent {
@Input() tabLabels:tabLabels[]=[]
@Input() labelTabData:any;
selectedTab:number=-1
selectedLabel(i:number){
  this.selectedTab=i
  // console.log(i)
  // for(let j=0;j<this.tabLabels.length; j++){
  //   // console.log(i,j)
  //   if (i==j){
  //     this.tabLabels[i].selected=true
      
  //   }
  //   else{
  //     this.tabLabels[i].selected=false
  //   }
    // console.log(this.tabLabels)
    
  }
}
