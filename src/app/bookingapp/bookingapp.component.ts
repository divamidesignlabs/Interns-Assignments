import { Component } from '@angular/core';


@Component({
  selector: 'app-bookingapp',
  templateUrl: './bookingapp.component.html',
  styleUrls: ['./bookingapp.component.scss']
})
export class BookingappComponent {

  tabItems = [
    { label: '10:00AM', value: '10:00AM' },
    { label: '2:00PM', value: '2:00PM' },
    { label: '6:30PM', value: '6:30PM'},
    { leabe:'10:00PM',value:'10:00PM'}
  ];

  isselected = 'item'; 
  tabContent = [  { value: '10:00AM', content: 'morning show' },  { value: '2:00PM', content: 'afternnon show' },{ value: '6:30PM', content: 'evening show' },{ value: '10:00PM', content:'night show' },];

}
