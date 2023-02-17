import { Component } from '@angular/core';
import { MovieData } from 'src/app/models/interfaces';
import { MovieListService } from 'src/app/services/movie-list.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  moviesData:MovieData[]=[];
  constructor(private service:MovieListService){}
  ngOnInit(){
    this.service.getMovieData().subscribe((data:any)=>{
      this.moviesData=data;
    })
  }
}
