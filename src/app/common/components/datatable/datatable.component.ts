import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { dataTable } from 'src/app/routingcomponents/components/project-listing-component/project-listing-component.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
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
  
}
