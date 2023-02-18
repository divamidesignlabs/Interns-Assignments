import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
 
  constructor(private http:HttpClient) { }
  url:string='http://localhost:8200/api/list-movies'
  getposts():Observable<any>{
    return this.http.get(this.url)
  }
  create(data: any){
    this.http.post('http://localhost:3000.json',data)
    .subscribe((postres)=>{
        console.log(postres)
    });
}

}
