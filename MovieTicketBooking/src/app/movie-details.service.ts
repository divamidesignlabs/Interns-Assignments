import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private http:HttpClient) { }

  serverUrl:string="http://localhost:8200/api/list-movies";

  getMovieDetails(): Observable<any> 
  {
    return this.http.get<any>(this.serverUrl)
  }
}
