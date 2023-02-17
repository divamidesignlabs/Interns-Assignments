import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  usersUrl : string = "http://localhost:3000/users";
  projectsUrl : string = "http://localhost:3000/projects";

  constructor( private http : HttpClient ) {
    }
    getUsersFromDB():Observable<any>{
      return this.http.get(this.usersUrl)
    }
    getProjectsFromDB():Observable<any>{
      return this.http.get(this.projectsUrl)
    }
}
