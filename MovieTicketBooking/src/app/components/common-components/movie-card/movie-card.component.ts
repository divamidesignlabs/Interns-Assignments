import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() movieDetails:any[]=[];
  @Input() currentIndex:number=0;
  @Output() ticketBookingOptions = new EventEmitter();

  constructor(private router:Router){}

  // When we click on movie img navigate to booking page and we are sending required data need in the booking page
  showTicketBookingOptions()
{
  this.ticketBookingOptions.emit()
  this.router.navigate(['/booking-page'],{
    state: { sendMovieDetails : this.movieDetails, sendCurrentIndex : this.currentIndex }})
  console.log(this.movieDetails[0])
}

}
