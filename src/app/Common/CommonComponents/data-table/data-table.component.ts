import { Component } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  keys=["id","name","age","gender"]
  data=[
    {"id":"1","name":"aaaa","age":"10","gender":"f"},
    {"id":"2","name":"bbbb","age":"20","gender":"f"}
  ]
}
