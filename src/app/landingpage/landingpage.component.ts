import { Component } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent {
  title = 'bookingApplication';
  // common tab component
  tabItems = [
    { label: 'Now Showing', value: 'Now Showing' },
    { label: 'Upcoming Movies', value: 'Upcoming Movies' },
  ];

  isselected = 'item'; 
  tabContent = [  { value: 'Now Showing', content: 'Now Showing content div' },  { value: 'Upcoming Movies', content: 'Upcoming Movies content div' },];


}
