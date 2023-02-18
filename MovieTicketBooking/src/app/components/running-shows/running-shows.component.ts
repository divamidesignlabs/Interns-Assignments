import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-running-shows',
  templateUrl: './running-shows.component.html',
  styleUrls: ['./running-shows.component.scss']
})
export class RunningShowsComponent {
  cards:any;
  constructor(private movieData:MovieDataService){}

  ngOnInit(){
    this.movieData.getMovieList().subscribe((response)=>{
      console.log(response);
      this.cards=response;
    })
  }
  getData(event:any){
    this.cards=event;
    console.log("Hii");
    console.log(this.cards)
  }
  resetFilter(event:any){
    this.movieData.getMovieList().subscribe((response)=>{
      console.log(response);
      this.cards=response;
    })
  }

}
