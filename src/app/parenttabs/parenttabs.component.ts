import { Component } from '@angular/core';

@Component({
  selector: 'app-parenttabs',
  templateUrl: './parenttabs.component.html',
  styleUrls: ['./parenttabs.component.css']
})
export class ParenttabsComponent {
  activatedtabindex:number=-1;
    tabName:any=['NowShowing','UpComing Movies'];
    tabchange(tabindex:number){
      this.activatedtabindex=tabindex
    }
}
