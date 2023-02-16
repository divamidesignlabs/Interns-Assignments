import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  @Input() usersArray:any
  keysOfUsersArray(){
    return Object.keys(this.usersArray[0]) //return type Array
  }
}
