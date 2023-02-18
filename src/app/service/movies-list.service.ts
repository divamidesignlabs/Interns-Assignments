import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesListService {
  constructor(private http:HttpClient) { }
    //method to get the data 
    getMoviesListing():Observable<any>{
     return this.http.get('http://localhost:8200/api/list-movies');
    }
}
