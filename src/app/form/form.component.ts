import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  details:any;
  registerForm=new FormGroup({
    date:new FormControl(''),
    numberOfTickets:new FormControl(''),
    seatType:new FormControl('')
  })
  constructor(private http:HttpClient,private fromdata:MovieService){}
  
  onsubmit(){
    this.details= this. registerForm.value
    this.fromdata.create( this.details)
  }
}
