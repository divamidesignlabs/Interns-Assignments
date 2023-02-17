import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieData } from '../models/movie-data';

@Injectable({
  providedIn: 'root',
})
/*
Movie Service - Used for communicating 
with the backend API's.
*/
export class MovieService {
  serviceURL: string;
  constructor(private http: HttpClient) {
    this.serviceURL = 'https://localhost:8200/api';
  }

  // Method to fetch all the movies data
  getAllMovies(): Observable<MovieData[]> {
    return this.http.get<MovieData[]>(`${this.serviceURL}/list-movies`);
  }
  // Method to fetch a specific movie based on ID
  getMovie(id: number): Observable<MovieData> {
    return this.http.get<MovieData>(`${this.serviceURL}/read-movie/${id}`);
  }
  // // Method for updating data
  // addMovie(movie: MovieData): any {
  //   return this.http.post(`${this.serviceURL}/add-movie`, movie);
  // }
  // updateMovie(id : number) : any {
  //   return this.http.put(`${}/`)
  // }
}
