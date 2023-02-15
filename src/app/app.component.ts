import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qarma';
  activatedtabindex:number=-1;
  tabNames :string[]=['Joined','Suggestion']
  tabchange(tabindex:number){
    this.activatedtabindex=tabindex
  }
  // showContent = false;

  // onShowContent() {
  //   this.showContent = true;
  // }
}
