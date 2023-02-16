import { Component,OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent {
  tableData :any;
  //TableService is injected here!
  constructor(private tableServer : TableService ){}
  //This will 
  ngOnInit(){
    this.tableServer.getMockData().subscribe((res)=>{
      this.tableData=res;
      console.log(this.tableData);
    })
  }
  //
  fun(){  
    return Object.keys(this.tableData[0])
  }
}
