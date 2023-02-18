import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesListService } from 'src/app/service/movies-list.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  //to store the response
  moviesData :any;
  
  constructor(private moviesList : MoviesListService , private router:Router){}
  ngOnInit(){
    this.moviesList.getMoviesListing().subscribe((res)=>{
      this.moviesData=res;
      console.log(this.moviesData);
    })
  }
  //On clicking it navigates to the booking-page
  onClickMovie(){
    this.router.navigate(['/booking-page'])
  }
  
}
