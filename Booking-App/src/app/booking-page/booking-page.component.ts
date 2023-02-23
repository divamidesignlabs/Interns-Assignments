import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {
  data?:number;
  times: string = '';
  selected_movie_data:any;

  constructor(private router: Router, private service: CrudServiceService){
    this.data = this.router.getCurrentNavigation()?.extras.state?.['id'];
    console.log("this is data",this.data);
    this.service.getUserFromService(this.data).subscribe(res =>{
      console.log("id:", res.show_times);
      
      this.selected_movie_data = res;
    })

    // this.times = this.selected_movie_data.show_times.split(',');

    
    
  }
}
