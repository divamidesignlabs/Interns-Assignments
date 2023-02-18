import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
showFilters:boolean=false;
languages=['Telugu','Hindi','English','Malayalam','Punjabi','Marati','Gujarati']
generes=['Action','Animation','Biography','Comedy','Crime','Darama']

}
