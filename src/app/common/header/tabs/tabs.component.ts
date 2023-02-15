import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() tabNames:string[]=[];
  currentIndex:number=0;


  joinStatus:boolean=false;
  suggestStatus:boolean=false;

  joinData()
  {
      this.joinStatus=true;
      this.suggestStatus=false;
  }

  suggestUser()
  {
    this.suggestStatus=true;
    this.joinStatus=false;
  }

  passTabIndex(i:number)
  {
      this.currentIndex=i;
  }

}
