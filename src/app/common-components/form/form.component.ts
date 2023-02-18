import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  BookingForm=new FormGroup({
    date: new FormControl('',Validators.compose([Validators.required])),
    lastName: new FormControl(''),
  });
}
