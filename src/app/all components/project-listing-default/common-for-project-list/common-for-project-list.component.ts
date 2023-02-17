import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-for-project-list',
  templateUrl: './common-for-project-list.component.html',
  styleUrls: ['./common-for-project-list.component.css']
})
export class CommonForProjectListComponent {
  @Input() logo:string="projectimg"
  @Input() projectImg:string='';
}
