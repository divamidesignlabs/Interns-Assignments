import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent {
  bookedData:any;
  // reactive form validation of the inputs date , number of tickets and dropdown
  registerBooking = new FormGroup({
    date: new FormControl('',[Validators.required]),
    tickets: new FormControl('',[Validators.required,Validators.min(1),Validators.max(8),Validators.pattern("[0-9]+$")]),
    dropDown:new FormControl('',[Validators.required])
  })
  // reference to the FormControl names in the FormGroup. 
  date  = this.registerBooking.controls['date'];
  tickets = this.registerBooking.controls['tickets'];
  dropDown = this.registerBooking.controls['dropDown'];
  // Catching the values of submitted values
  onSubmit(){
    this.bookedData = this.registerBooking.value;
    console.log(this.bookedData);
  }
}
