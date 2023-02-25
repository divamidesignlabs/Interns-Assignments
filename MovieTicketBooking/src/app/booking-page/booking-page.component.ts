import { Component } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {
  movieBookingDetails:any[]=[];
  movieBookingCurrentIndex:number=0;
  isMovieDimention2D:boolean=true;
  numberOfTickets:number=0;
  isIncrement:boolean=true;
  isDecrement:boolean=false;
  isMovieDimention3D:boolean=false;
  shows:string[]=["10:00 AM","2:00 PM","6:30 PM","9:00 PM"];
  selectedShowIndex:number=0;
  movieTimming:string='';
  ticketsCount:string='0';

  ticketBookingInfo = new FormGroup({
    date: new FormControl(''),
    noOfTickets: new FormControl('',Validators.compose([Validators.required])),
    ticketType: new FormControl(''),
  });
  constructor(private router :Router, private route:ActivatedRoute){
    this.movieBookingDetails = this.router.getCurrentNavigation()?.extras.state?.['sendMovieDetails'];
    this.movieBookingCurrentIndex = this.router.getCurrentNavigation()?.extras.state?.['sendCurrentIndex'];
  }
  showHomePage()
  {
    this.router.navigate([''])
  }
  selectMovieDimentionAs2D()
  {
    this.isMovieDimention2D=true;
    this.isMovieDimention3D=false;
  }
  selectMovieDimentionAs3D()
  {
    this.isMovieDimention2D=false;
    this.isMovieDimention3D=true;
  }
  incrementTicketCount()
  {
    this.isIncrement=true;
    this.numberOfTickets=this.numberOfTickets+1;
    this.isDecrement=false;
  }
  decrementTicketCount()
  {
    this.isIncrement=false;
    this.isDecrement=true;
    if(this.numberOfTickets<=0)
    {
      this.numberOfTickets=0;
    }
    else
    {
      this.numberOfTickets=this.numberOfTickets-1;
    }
  }
  passShowIndex(index:number)
  {
    this.selectedShowIndex=index;
    this.movieTimming=this.shows[index];
  }
  handleFormSubmit()
  {
    this.ticketsCount =this.ticketBookingInfo.value.noOfTickets as string;
    console.log(this.ticketsCount)
  }
}
