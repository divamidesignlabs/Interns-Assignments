import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingAppServicesService {

  constructor(private http: HttpClient) { }

  getMoviesData(): Observable<any> {
    console.log("pop");
    return this.http.get('http://localhost:8200/api/list-movies');
    
  }
}
