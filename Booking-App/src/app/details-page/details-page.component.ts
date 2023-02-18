import { Component } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})

export class DetailsPageComponent {

  data?:number;
  selected_movie_data:any;
  langs: string[] = [];


  constructor(private router: Router, private route: ActivatedRoute, private service: CrudServiceService){
    this.data = this.router.getCurrentNavigation()?.extras.state?.['submittedData'];
  }

  ngOnInit(){
    this.service.getUserFromService(this.data).subscribe(res =>{
      this.selected_movie_data = res;
      this.langs = this.selected_movie_data.language.split(',');
      console.log("log:", this.selected_movie_data);
      
    })
  }

  
  bookShow(){
    this.router.navigate(['/booking-tickets'],{
      state: { 'submittedData' : this.data },
      relativeTo: this.route
    });
  }
}
