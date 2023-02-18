import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviebookingService {

  constructor(private http:HttpClient) { }
  listMovies="http://localhost:8200/api/list-movies"
  getListMovies():Observable<any>{
    return this.http.get(this.listMovies)
  }
  getSelectedMovieID(id:any):Observable<any>{
    return this.http.get(`http://localhost:8200/api/read-movie/${id}`)
  }
}
