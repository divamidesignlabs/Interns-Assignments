import { Component } from '@angular/core';
import { DataRetrieveService } from 'src/app/services/data-retrieve.service';
@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent {
  getDataFromService:any=[];
  constructor(private data:DataRetrieveService){
    this.data.getData().subscribe((res)=>{
      this.getDataFromService=res;
      console.log(res);
    })
  }
}
