import { Component } from '@angular/core';
import { MovieData } from 'src/app/models/interfaces';
import { MovieListService } from 'src/app/services/movie-list.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  moviesData:MovieData[]=[];
  constructor(private service:MovieListService, private route: Router){}
  // getting the data from the http://localhost:8200/api/list-movies
  ngOnInit(){
    this.service.getMovieData().subscribe((data:any)=>{
      this.moviesData=data;
      console.log(this.moviesData, "hugfsaa")
    })
  }
  // navigating to movie details upon click
  navigateToDetail(id:number){
    console.log();
    this.route.navigate(['movie-detail'],{ state: { myId: id } });
  }
}
