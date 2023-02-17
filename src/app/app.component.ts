import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Alert, TableData, Toast } from './models/interfaces';
import { TableDataService } from './services/table-data/table-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fullAvail:any;
  localTableData:any;
  title = 'QarmaProject';
  showAlert:boolean=false; // flag which handles whether the alert should display or not
  showToast:boolean=false; // flag which handles whether the toast should display or not
  popupData: Alert = {
    alert_type: 'Remove User',
    label: 'Anuja kumari',
    toConfirmMessage:`Are you sure you want to Remove User`,
    content: `By confirming this Anuja kumari wouldn't be able to:`,
    rightsGoingToLoss: ['Access any Projects related to this Account','Any Personal Data Synced with this Account']
  };

  constructor( private tableService:TableDataService){}
  // it will set alert flag to true on clicking button
  handleAlert(){
    this.showAlert=true;
  }
  //it will set toast flag to true on clicking button
  handleToast(){
    this.showToast=true;
  }

  // handles the response from alert component
  handleResponse(event:any){
    console.log(event);
    this.showAlert=false;
  }

  toast:Toast={
    msg: 'rrrtrtr',
    type: 'error',
    timeout: 2000
  }

  // handles toast response  which is used to destroy the component toast component
  handleToastResponse(event:boolean){
    this.showToast=event;
    console.log("I am in app",event);
  }

  tableData:TableData={
    columnNames:["col1","col1","col1","col1","col1","col1","col1"],
    rowData: 'http://localhost:3000/users'
  }

  handleTableData(){
    // let localObservable:Observable<Object>=this.tableService.getTableData()
    // localObservable.subscribe((value)=>{
    //   this.localTableData=value;
    //   console.log(value);
    // },(error:any)=>{
    //   console.log("error")
    // },()=>{
    //   console.log("complete")
    //   console.log(this.localTableData)
    //   this.fullAvail=this.localTableData;
    // }
    // )
  }

}
