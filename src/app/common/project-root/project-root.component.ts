import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-project-root',
  templateUrl: './project-root.component.html',
  styleUrls: ['./project-root.component.scss']
})
export class ProjectRootComponent {
  @Input() detailsProject: any;
}
