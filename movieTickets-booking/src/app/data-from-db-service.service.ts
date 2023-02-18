import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataFromDBServiceService {
  moviesUrl : string ="http://localhost:8200/api/list-movies";
  movies : any =[];
  constructor(private http : HttpClient) { }

   
  getMovie(){
    return this.http.get(this.moviesUrl)
  }
}
