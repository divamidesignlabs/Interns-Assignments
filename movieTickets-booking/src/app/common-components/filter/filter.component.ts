import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  languages = [
    {id: 1, name: 'English', isChecked: false},
    {id: 2, name: 'Hindi', isChecked: false},
    {id: 3, name: 'Tamil', isChecked: false},
    {id: 4, name: 'Telugu', isChecked: false},
    {id: 5, name: 'Marathi', isChecked: false},
    {id: 6, name: 'Malayalam', isChecked: false},
    {id: 7, name: 'kannada', isChecked: false},
    {id: 8, name: 'Punjabi', isChecked: false},
    {id: 9, name: 'Gujarati', isChecked: false},
    {id: 10, name: 'Bengali', isChecked: false},
  ];
  genre = [
    {id: 1, name: 'Action', isChecked: false},
    {id: 2, name: 'Animation', isChecked: false},
    {id: 3, name: 'Biography', isChecked: false},
    {id: 4, name: 'Comedy', isChecked: false},
    {id: 5, name: 'Crime', isChecked: false},
    {id: 6, name: 'Drama', isChecked: false},
    {id: 7, name: 'Fantasy', isChecked: false},
    {id: 8, name: 'Horror', isChecked: false},
    {id: 9, name: 'Romantic', isChecked: false},
    {id: 10, name: 'Thriller', isChecked: false},
  ];
  clearAll(){}
  
  filter(){
    let filteredData = this.languages.filter(item => item.isChecked);
     filteredData = filteredData.filter(item => item.isChecked);
  }
}
