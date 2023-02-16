import { Component } from '@angular/core';
import {ServiceService} from 'src/app/service.service'
import { dataInterface } from 'dataInterface';
// interface dataObject{
//   [key:string]:string,
//   id:string,
//   name:string,
//   age:string,
//   gender:string
// }
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent {
  keys:Array<string>=["id","name","age","gender"]
  details:dataInterface[]=[]
    // {id:"1",name:"aaaa",age:"10",gender:"f"},
    // {id:"2",name:"bbbb",age:"20",gender:"f"}

orderBy="id";
  constructor(private ser:ServiceService){
    this.ser.getData().subscribe((data)=>{this.details=data
    console.log(data)});
  }
  
}
