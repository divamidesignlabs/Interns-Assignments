import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  // form group of booking ticket
  form = new FormGroup({
    date:new FormControl(''),
    noOfSeats:new FormControl(''),
    dropDown:new FormControl('')
  })
}
