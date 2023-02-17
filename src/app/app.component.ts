import { Component } from '@angular/core';
import { header } from './common/Interfaces/interface';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  constructor(private database:DatabaseService){}
  title = 'qarmaui';

  headerList:header[]=[
    {
      image:`assets/images/dashboard.svg`,
      alt:'DashBoard',
      label:'Dashboard'
    },
    {
      image:`assets/images/projects.svg`,
      alt:'Projects',
      label:'Projects'
    },
    {
      image:`assets/images/schedules.svg`,
      alt:'Schedules',
      label:'Schedules'
    },
    {
      image:`assets/images/settings.svg`,
      alt:'Settings',
      label:'Settings'
    },
    {
      image:`assets/images/knowledge hub.svg`,
      alt:'Knowledge hub',
      label:'Knowledge hub'
    }

  ]

  // Joined:any=[{
  //   teamImage:'\assets\joined-images\testingGroup.svg'
  // }]





}