import { Component ,OnInit,Input} from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
import { MovieData } from 'src/app/models/interfaces';
import { MinutesToHoursPipe } from 'src/app/pipes/hrsToMins';
import { ReplacePipe } from 'src/app/pipes/stringSeparationChange';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  // movie data taking from movie-list component
  @Input() movieData:MovieData={
    id: 0,
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
  constructor(private service:MovieListService, private route: Router){}
  navigateToDetail(){
    console.log(this.movieData.id);
    this.route.navigate(['movie-detail'],{ state: { myId: this.movieData.id } });
  }
  
}


  // declarations:[MinutesToHoursPipe]