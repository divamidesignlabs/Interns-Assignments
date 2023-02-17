import { Component } from '@angular/core';
import { HeaderComponent } from '../../common-components/header/header.component';
import { CreateProjectComponent } from '../create-project/create-project.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-creation',
  templateUrl: './project-creation.component.html',
  styleUrls: ['./project-creation.component.scss']
})
export class ProjectCreationComponent {
  constructor(private route:Router){}
  navigateToCreatingProject(){
    this.route.navigate(['create-project']);
  }
}
