import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-common-tabs',
  templateUrl: './common-tabs.component.html',
  styleUrls: ['./common-tabs.component.scss']
})
export class CommonTabsComponent {
  @Input() tabLabels:any;
  @Input() tabLabelsData:any;
  touchedTab:number = -1;

  touchedLabel(i:number){
    this.touchedTab=i
  }

}
