import { Component, Input,Output, EventEmitter } from '@angular/core';
import { MovieGenreSeperatedWithSlashPipe } from 'src/app/pipes/movie-genre-seperated-with-slash.pipe';
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
  showTicketBookingOptions()
{
  this.ticketBookingOptions.emit()
  // this.router.navigate(['/booking-page'], { state: { serviceId: this.movieDetails[this.currentIndex]} });
  this.router.navigate(['/booking-page'],{
    state: { sendMovieDetails : this.movieDetails, sendCurrentIndex : this.currentIndex }})
  console.log(this.movieDetails[0])
}

}
