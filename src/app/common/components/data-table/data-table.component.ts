import { Component } from '@angular/core';
import { TableData } from 'src/app/models/interfaces';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
  
  data:any={
    columnNames: ["column1","column2","column3","column4","column5",],
    rowData: [
        {
          column1:1,
          column2:2,
          column3:3,
          column4:4,
          column5:5
        },
        {
          column1:1,
          column2:2,
          column3:3,
          column4:4,
          column5:5
        },
        {
          column1:1,
          column2:2,
          column3:3,
          column4:4,
          column5:5
        },
        {
          column1:1,
          column2:2,
          column3:3,
          column4:4,
          column5:5
        }
    ]
  }

  ngOnInit(){
    console.log(this.data);
    for(let col of this.data.rowData)
      console.log(col.column1)
  }

}
