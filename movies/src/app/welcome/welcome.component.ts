import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieData } from '../models/movie-data';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  movies: MovieData[] = [];
  constructor(private movieService: MovieService, private router: Router) {}
  ngOnInit(): void {
    this.loadAllMovies();
  }
  loadAllMovies(): void {
    this.movieService.getAllMovies().subscribe(
      (res: any) => {
        this.movies = res;
        console.log(this.movies[0].name);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  // Will
  showDetails(id: number) {
    this.router.navigate(['details'], {
      state: {
        id,
      },
    });
  }
}
