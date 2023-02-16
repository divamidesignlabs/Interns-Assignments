import { Component } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {

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
}
