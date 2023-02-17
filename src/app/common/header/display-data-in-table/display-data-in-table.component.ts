import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display-data-in-table',
  templateUrl: './display-data-in-table.component.html',
  styleUrls: ['./display-data-in-table.component.scss']
})
export class DisplayDataInTableComponent {
  @Input() userDetails:any;
  // keys=Object.keys(this.userDetails[0])
  keysOfObj(){
    return Object.keys(this.userDetails[0]) 
    //Array
  }
}

