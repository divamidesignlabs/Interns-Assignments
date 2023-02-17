import { Component } from '@angular/core';
import { MoviesListService } from 'src/app/service/movies-list.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  moviesData :any;
  
  

  constructor(private moviesList : MoviesListService ){}
  ngOnInit(){
    this.moviesList.getMoviesListing().subscribe((res)=>{
      this.moviesData=res;
      console.log(this.moviesData);
    })
  }
  
}
