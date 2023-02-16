import { Component } from '@angular/core';
import { ProjectCreationComponent } from 'src/app/project-creation-flow/project-creation/project-creation.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private route:Router){}
  navigateToProjectCreation(){
    this.route.navigate(['project-creation']);
  }
}
