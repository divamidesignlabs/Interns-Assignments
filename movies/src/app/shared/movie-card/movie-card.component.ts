import { Component, Input, OnChanges } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
import { MovieData } from 'src/app/models/movie-data';

@Pipe({
  name: 'customPipe',
})
export class TimeConverter implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return Math.ceil(value / 60) + 'hrs' + (value % 60) + 'mins'; //converting time into hrs and minutes
  }
}
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnChanges {
  @Input() movieData!: MovieData;

  ngOnChanges() {}
}
