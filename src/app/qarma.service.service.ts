import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QarmaServiceService {

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any> {
    console.log("pop");
    return this.http.get('http://localhost:3000/usersProfiles');
    
  }
}
