import { Component, OnInit } from '@angular/core';
import { QarmaServiceService } from '../qarma.service.service';
@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
//  db.json data displaying using services
usersProfiles: any[] = [];
constructor(private qarmaServiceService:QarmaServiceService) { }  
ngOnInit(): void {
  this.qarmaServiceService.getUsersData().subscribe(data=>{
    this.usersProfiles=data;
    console.log(data)
  })
}
}
