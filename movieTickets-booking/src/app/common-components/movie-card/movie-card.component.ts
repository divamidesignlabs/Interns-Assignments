import { Component ,OnInit,Input} from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
import { MovieData } from 'src/app/models/interfaces';
import { MinutesToHoursPipe } from 'src/app/pipes/hrsToMins';
import { ReplacePipe } from 'src/app/pipes/stringSeparationChange';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
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
}


  // declarations:[MinutesToHoursPipe]