import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  newObservable = new Observable<any>;

  serviceURL : string = "";

  constructor(private http : HttpClient) { 
    // this.serviceURL = "http://localhost:8200/api/list-movies"
   }

   getUserFromService(id:any) : Observable<any>{
    this.serviceURL = "http://localhost:8200/api/read-movie"
    return this.http.get<any>(this.serviceURL+"/"+id);
   }

   getAllUserFromService() : Observable<any[]>{
    this.serviceURL = "http://localhost:8200/api/list-movies"
    return this.http.get<any[]>(this.serviceURL);
   }

   postDataFromService(FormData:any) : Observable<any>{
    return this.http.post<any>(this.serviceURL,FormData);
   }

   DeleteDataFromService(FormData:any) : Observable<any>{
    return this.http.delete<any>(this.serviceURL+'/'+FormData.id);
   }

   updateDataFromService(FormData:any) : Observable<any>{
    return this.http.put<any>(this.serviceURL+'/'+FormData.id,FormData);
   }
}
