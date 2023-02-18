import { Component } from '@angular/core';
import { BookingAppServicesService } from '../booking-app-services.service';
@Component({
  selector: 'app-chord-component',
  templateUrl: './chord-component.component.html',
  styleUrls: ['./chord-component.component.scss']
})
export class ChordComponentComponent {
  chords: any;
  router: any;
  constructor(private bookingAppServicesService:BookingAppServicesService ) { }  
  

  convertToHoursMinutes(duration: number) {
    let hours = Math.floor(duration / 60); 
    let remainingMinutes = duration % 60; 
  
    return hours + " hrs " + remainingMinutes + " mins";
  }
  percentage(num:any, per:any)
{
  
  return Math.floor((num/per)*100) +" % ";
}
    
  ngOnInit(): void {
    this.bookingAppServicesService.getMoviesData().subscribe(data=>{
     this.chords=data;
      console.log(data)
    })
  }
  routeNextPage(){

    this.router.navigate(['/bookingapp']);
  }
}
