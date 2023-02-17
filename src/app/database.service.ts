import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor( private http:HttpClient) { }
  url:string='http://localhost:3000/posts'
  getDatabaseData():Observable<any>{
    return this.http.get(this.url)
  }
}
