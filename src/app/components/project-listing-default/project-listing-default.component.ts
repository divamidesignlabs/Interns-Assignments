import { Component } from '@angular/core';
import { projectRoot } from 'src/app/common/Interfaces/interface';
@Component({
  selector: 'app-project-listing-default',
  templateUrl: './project-listing-default.component.html',
  styleUrls: ['./project-listing-default.component.scss']
})
export class ProjectListingDefaultComponent {
  projectExploreObj:any = {
    image:"assets/home-page/ExploreSampleProjects.svg",
    blockType:'Explore sample project'
  }

  projectCreationObj:projectRoot = {
    image:"assets/home-page/createNewProject.svg",
    blockType:'Create new project'
  }
}
