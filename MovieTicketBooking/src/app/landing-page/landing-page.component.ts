import { Component,OnInit } from '@angular/core';
import { MovieDetailsService } from '../movie-details.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{

  movieDetails:any[]=[];
  shows:string[]=["Now Showing","Upcomming Movies"];
  currentIndex:number=0;
  constructor(private shareMovieDetails:MovieDetailsService){}

  ngOnInit(): void
  {
  // get movie details from the API.
  this.shareMovieDetails.getMovieDetails().subscribe((data) => { 
    {
      this.movieDetails=data;
      console.log("data",this.movieDetails)
    }
  })
  }

  

  passTabIndex(i:number)
  {
      this.currentIndex=i;
  }

}
