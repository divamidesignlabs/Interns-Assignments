import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent {
@Input() navList:any;
@Input() navKeys:any;
constructor(private router:Router){}
navTo(val:any){
  console.log(val)
  this.router.navigate([val])
}
}
