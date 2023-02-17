import { Component, Input } from '@angular/core';
import { projectStat } from '../interfaces/interface';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  @Input() detailsProject: projectStat = {
    imgSrc:'',
    projectContext:''
  }
 
}
