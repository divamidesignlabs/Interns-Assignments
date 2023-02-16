import { Component, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  
  teamNames=[{img:`assets/teamimgs/qarma testing.svg`,teamname:'Qarma Testing Group'},
  {img: `assets/teamimgs/qarma testing.svg`,teamname:'Backend Team'},
  {img:`assets/teamimgs/qarma testing.svg`,teamname:'New Projects'},
  ]

  }

