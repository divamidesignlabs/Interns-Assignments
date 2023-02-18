import { Component, Input } from '@angular/core';
import { MovieData } from 'src/app/models/movie-data';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  // Two boolean values , showMovies keeps
  // track of current movies and other the
  // Upcoming movies
  //
  @Input() movies!: MovieData[];
  showExistingMovies: boolean = true;

  showMovies() {
    this.showExistingMovies = !this.showExistingMovies;
  }
}
