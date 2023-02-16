<<<<<<< Updated upstream
import { Component } from '@angular/core';
=======
import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { dataTable } from 'src/app/routingcomponents/components/project-listing-component/project-listing-component.component';
>>>>>>> Stashed changes

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
<<<<<<< Updated upstream

  tableKeys : string [] =["Id","Firstname", "LastName", "Age", "PhoneNumber", "Gender"];
  dataInTable =[
    {
      Id: '1',
      FirstName : "Phawhan",
      LastName : "Gajjalakonda",
      Age : 22,
      PhoneNumber : "9012365478",
      Gender : "M"
    },
    {
      Id: '2',
      FirstName : "Saii",
      LastName : "Gajjalakonda",
      Age : 22,
      PhoneNumber : "9874563210",
      Gender : "M"
    },
    {
      Id: '3',
      FirstName : "Juned",
      LastName : "Juned",
      Age : 20,
      PhoneNumber : "4569871230",
      Gender : "M"
    },
    {
      Id: '4',
      FirstName : "Sai",
      LastName : "Priya",
      Age : 20,
      PhoneNumber : "2589637410",
      Gender : "F"
    },
    {
      Id: '5',
      FirstName : "Adi",
      LastName : "Lakshmi",
      Age : 25,
      PhoneNumber : "3698520147",
      Gender : "F"
    },
  ]
=======
  @Input() dataInTable : any[] = [];
  @Output() selectedAction = new EventEmitter();
  tableKeys : any[]=[];
  resultarray : dataTable[]=[];
  filteredData : any[]=[];
  filterStatusWord : boolean = false;
  selectedProperty : string = "";
  tempData : any[]=[];

  ngOnInit(){
  }

  assignKeys(){
    this.tableKeys=Object.keys(this.dataInTable[0]);
    return this.tableKeys;
  }
  // ngOnchanges(changes : SimpleChanges){
  //   this.dataInTable =changes['dataInTable'].previousValue;
  //   console.log("on dataIntable changes", this.dataInTable);
  // }

  filterStatus(){
    this.filterStatusWord = true;
  }

  filtering(val:any){
    this.filteredData=this.dataInTable.filter(user=>{
      return user[this.selectedProperty].toLowerCase().includes(val.toLowerCase())
    }) 
    this.dataInTable=this.filteredData;
    console.log("entries after =====", this.filteredData)
  }
  
>>>>>>> Stashed changes
}
