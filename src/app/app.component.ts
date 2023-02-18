import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookingApplication';
  // common tab component
  tabItems = [
    { label: 'Now Showing', value: 'Now Showing' },
    { label: 'Upcoming Movies', value: 'Upcoming Movies' },
  ];

  isselected = 'item'; 
  tabContent = [  { value: 'Now Showing', content: 'Now Showing content div' },  { value: 'Upcoming Movies', content: 'Upcoming Movies content div' },];


  filterItem = [
    { label: 'date', value: 'date', content:['telugu'] },
    { label: 'lang', value: 'language' },
    {label:'genere',value:'genere'}
  ];
  checkboxes = [
    {
      category: 'Date',
      options: [
        { name: '2020', value: '2020', checked: false },
        { name: '2021', value: '2021', checked: false },
        { name: '2022', value: '2022', checked: false }
      ]
    },
    {
      category: 'Language',
      options: [
        { name: 'English', value: 'en', checked: false },
        { name: 'Spanish', value: 'es', checked: false },
        { name: 'French', value: 'fr', checked: false }
      ]
    },
    {
      category: 'Genre',
      options: [
        { name: 'Action', value: 'action', checked: false },
        { name: 'Comedy', value: 'comedy', checked: false },
        { name: 'Drama', value: 'drama', checked: false }
      ]
    }
  ];

  
    
}
