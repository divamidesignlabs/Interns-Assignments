import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent {
  // userName="afff";
  // popup:any;
  // remove(){
  //  this.popup=1;
  // }
  tabBar=["Joined","Suggestions"];
  suggestionClicked:any;
  suggestions=["ab","cd"]
  joined=["aa","bb"]
  suggFun(){
    this.suggestionClicked=1;
  }
  joinedFun(){
    this.suggestionClicked=0;
  }
  addToJoined(itemIndx:any){
    this.joined.push(this.suggestions[itemIndx]);
    this.suggestions.splice(itemIndx,1);
  }
}
