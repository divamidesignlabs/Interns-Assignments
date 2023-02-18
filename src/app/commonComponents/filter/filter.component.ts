import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  Lang = ['English','Hindi', 'Telugu', 'Marathi', 'Malayalam', 'Tamil', 'Punjabi', 'Gujarathi']
  Genre = ['Action','Animation','Biography','Comedy','Crime','Drama','Fantacy', 'Horror', 'Romantic', 'Sci-fi', 'Thriller']

}
