import { Component } from '@angular/core';
import { TabHorizontalItems } from 'src/app/models/interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  selectedItemIndex:number=0; // default selection is first element
  horizontal_items:TabHorizontalItems[]=[
      {
        item:"Joined",
        isSelected:true
      },
      {
        item:"Suggestions",
        isSelected:false
      },
      {
        item:"Future-1",
        isSelected:false
      },
      {
        item:"Future-3",
        isSelected:false
      }
  ]
  joined:string[]=["joined dummy content","joined dummy content","joined dummy content","joined dummy content","joined dummy content","joined dummy content"];
  suggesstion:string[]=["suggestion dummy content","suggestion dummy content","suggestion dummy content","suggestion dummy content","suggestion dummy content",];
  Future_1:string[]=["future-1 dummy content","future-1 dummy content","future-1 dummy content","future-1 dummy content","future-1 dummy content","future-1 dummy content",];
  Future_3:string[]=["future-3 dummy content","future-3 dummy content","future-3 dummy content","future-3 dummy content","future-3 dummy content","future-3 dummy content",];
  vertical_items:string[]=this.joined;
  handleClick(i:number){
    console.log("I am clicked"+ i);
    this.horizontal_items[this.selectedItemIndex].isSelected=false;
    this.horizontal_items[i].isSelected=true;
    this.selectedItemIndex=i;
    console.log(this.horizontal_items);
    let selected:string=this.horizontal_items[i].item;
    if (selected==="Joined")
      this.vertical_items=this.joined;
    else if (selected==="Suggestions")
    this.vertical_items=this.suggesstion;
    else if (selected==="Future-1")
    this.vertical_items=this.Future_1;
    else if (selected==="Future-3")
    this.vertical_items=this.Future_3;
  }
}
