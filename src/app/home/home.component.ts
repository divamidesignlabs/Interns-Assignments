import { Component } from '@angular/core';
import { projectStat } from '../common-component/interfaces/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projectExplore:projectStat = {
    imgSrc:"assets/images/exploreproject.svg",
    projectContext:'Explore sample project'
  }

  projectCreation:projectStat = {
    imgSrc:"assets/images/createproject.svg",
    projectContext:'Create new project'
  }
}
