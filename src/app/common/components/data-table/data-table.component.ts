import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})

// takes src url as input 
export class DataTableComponent implements OnInit{

  dataAvailable:boolean=false;
  @Input() rowData:any='http://localhost:3000/users';
  columnNames:string[]=[];
  constructor(private http:HttpClient){}
  ngOnInit(){
    if (typeof this.rowData === "string"){
      let temp:any;
      console.log("I am string");
      console.log(this.rowData);
      console.log(this.rowData);
      this.http.get(this.rowData).subscribe(
        (value)=>{
        temp=value;
        console.log(temp);
        
        },
        (error)=>{
          console.log("I am error")
        },
        ()=>{
          this.rowData=temp;
          console.log("I am from data table",this.rowData);
          this.columnNames=Object.keys(this.rowData[0]);
          console.log(this.columnNames);
          this.dataAvailable=true;
        }
      )
    }
    else{
      console.log("I am not string");
    }
  }

}
