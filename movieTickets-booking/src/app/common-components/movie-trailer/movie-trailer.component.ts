import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.scss']
})
export class MovieTrailerComponent {
  @Input() movieTrailerUrl : string = "https://www.youtube.com/watch?v=eOrNdBpGMv8";

}
