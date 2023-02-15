import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  displayMembers:boolean=true;
  @Output() showContent=new EventEmitter<any>()
 

  onButtonClick() {
    this.showContent.emit();
  }
  }

