import {EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class MovieDataService {
  // url:string="http://localhost:8200/api/list-movies"
  url1:string="http://localhost:8200/api"
  id:number=0; 
  // emitId: EventEmitter<any> = new EventEmitter();
  constructor(private http:HttpClient , private route:ActivatedRoute) { }
  
  getMovieList():Observable<any>{
    // return this.http.get(this.url);
    return this.http.get(this.url1+"/list-movies");
  }
  getSynopsis(id:number): Observable<any>  //method to call synopsis
  {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   console.log("hi hello",params.get('id'));
    // });
    return this.http.get<any>(`${this.url1}/read-movie/${this.id}`);
  }

}
