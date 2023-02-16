import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  usersUrl : string = "http://localhost:3000/users";

  constructor( private http : HttpClient ) {
    }
    getDataFromDB():Observable<any>{
      return this.http.get(this.usersUrl)
    }
}
