import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareUserDataService {

  constructor(private http:HttpClient) { }

  serverUrl:string="http://localhost:3000/posts";

  getUserData(): Observable<any> {
    return this.http.get<any>(this.serverUrl)
  }

}
