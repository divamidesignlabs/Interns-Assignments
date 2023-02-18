import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.scss']
})
export class TabsComponentComponent {
// decloration
isselected: string='';
// passing data to the parent component
@Input()tabDataItem: any[] = [];
@Input()tabDataContent: any[] = []; 
}
