import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieDataService {
  url:string="http://localhost:8200/api/list-movies"
  constructor(private http:HttpClient) { }
  
  getMovieList():Observable<any>{
    return this.http.get(this.url);
  }

}
