import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})

export class DetailsPageComponent {

  data?:number;
  selected_movie_data:any;

  constructor(private router: Router, private service: CrudServiceService){
    this.data = this.router.getCurrentNavigation()?.extras.state?.['submittedData'];
    this.service.getUserFromService(this.data).subscribe(res =>{
      this.selected_movie_data = res;
    })
  }

  bookShow(){
    this.router.navigate(['booking-tickets'],{
      state: { 'submittedData' : this.data }
      // relativeTo: this.activeroute
    });
  }
}
