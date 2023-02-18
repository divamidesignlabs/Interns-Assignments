import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDetails } from '../model/consts';
@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {
  url = 'http://localhost:3000/users';
  constructor(private http:HttpClient) { }
  getUserDetails():Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(this.url);
  }

}
