import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:3000/users'

  getTableData(){
    return this.http.get(this.url)
  }
}
