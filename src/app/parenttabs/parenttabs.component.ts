import { Component } from '@angular/core';

@Component({
  selector: 'app-parenttabs',
  templateUrl: './parenttabs.component.html',
  styleUrls: ['./parenttabs.component.css']
})
export class ParenttabsComponent {
  activatedtabindex:number=-1;
  tabNames :string[]=['Joined','Suggestion']//passing data from parent to child
  tabchange(tabindex:number){
    this.activatedtabindex=tabindex
  }
}
