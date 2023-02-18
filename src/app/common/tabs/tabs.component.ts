import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  tabLabels:any=[
    {label:'Now Showing'},
    {label:"Upcoming Movies"},

  ]
  selectedTab: number = -1;
  selectedLabel(i: number) {
    this.selectedTab = i;
  }
}
