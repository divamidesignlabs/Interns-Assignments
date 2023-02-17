import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieData } from '../models/interfaces';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieListService {

  constructor(private http:HttpClient) { }
  getMovieData():Observable<MovieData[]>{
    return this.http.get<MovieData[]>('http://localhost:8200/api/list-movies');
  }
}
