import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {dataInterface} from 'dataInterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  // postData(data:any){
  //   return this.http.post("http://localhost:3000/user",data)
  // }
 getData():Observable<dataInterface[]>{
  return this.http.get<dataInterface[]>('http://localhost:3000/user');
 }
}
