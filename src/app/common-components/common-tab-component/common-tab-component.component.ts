import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-tab-component',
  templateUrl: './common-tab-component.component.html',
  styleUrls: ['./common-tab-component.component.scss']
})
export class CommonTabComponentComponent {
  // decloration
  isselected: string='';
  // passing data to the parent component
  @Input()
  tabDataItem: any[] = [];
  @Input()
  tabDataContent: any[] = []; 
  
}
