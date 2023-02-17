import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-cardview',
  templateUrl: './project-cardview.component.html',
  styleUrls: ['./project-cardview.component.scss']
})
export class ProjectCardviewComponent {
  @Input() projectCard : any={}
  projectCardExecutionStatus : string ="/assets/images/Statistics.svg";
  projectCardPrivateLogo : string ="/assets/images/organisation.svg";
 
}
