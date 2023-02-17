import { Component } from '@angular/core';
import { Card } from 'src/app/models/interfaces';

@Component({
  selector: 'app-project-listing-default',
  templateUrl: './project-listing-default.component.html',
  styleUrls: ['./project-listing-default.component.scss']
})
export class ProjectListingDefaultComponent {
  card:Card={
      image_path:'assets\\images\\project-creation\\create_new_projecticon.svg',
      title:'Explore sample Project',
  }

}
