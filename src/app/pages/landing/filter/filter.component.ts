import { Component } from '@angular/core';
import {Accordion} from 'primeng/accordion'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  

  LanguagesArray:any[]=[
    'English','Hindi','Tamil','Telugu','Marathi','Malayalam','Kannada','Punjabi','Gujarati','Bengali'
  ]
  GenereArray:any[]=[
    'Action','Animation','Biography','Comedy','Crime','Drama','Fantasy','Horror','Romantic','Sci-fi','Thriller'
  ]
}
