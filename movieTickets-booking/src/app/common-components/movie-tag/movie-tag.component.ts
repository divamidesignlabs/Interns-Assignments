import { Component ,Input} from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
import { MovieData } from 'src/app/models/interfaces';
import { MinutesToHoursPipe } from 'src/app/pipes/hrsToMins';
@Component({
  selector: 'app-movie-tag',
  templateUrl: './movie-tag.component.html',
  styleUrls: ['./movie-tag.component.scss']
})
export class MovieTagComponent {
  // taking moviedata from the http://localhost:8200/api/list-movies
  @Input() movieData:MovieData={
    id: 9,
    name: '',
    synopsis: '',
    release_date: '',
    released: '',
    poster_url: '',
    trailer_url: '',
    pg_rating: '',
    language: '',
    genre: '',
    duration: 0,
    like_count: 0,
    dislike_count: 0,
    show_times: ''
  };
  

  constructor(){
    
    minutesToHours:MinutesToHoursPipe;
  }
  // function to convert likes counts to percentage
  likePercentage(likes:number,dislikes:number):number{
    let resultPercentage=likes / (likes+dislikes) * 100 ;
    return parseFloat(resultPercentage.toString()); ;
  }
}
