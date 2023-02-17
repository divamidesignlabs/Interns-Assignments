import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieveService {

  url=" http://localhost:3000/profile"; 
  constructor(public http : HttpClient ) { 
    
  }
  getData():Observable<any>{  
    return this.http.get<any>(this.url)
  }
}
