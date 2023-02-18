import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
import { DataFromDBServiceService } from '../data-from-db-service.service';

export interface movieData{
  id: 9,
  name: string,
  synopsis: string,
  release_date: string,
  released: string,
  poster_url: string,
  trailer_url: string,
  pg_rating: string,
  language: string,
  genre: string,
  duration: number,
  like_count: number,
  dislike_count: number,
  show_times: string
}

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {
  @Input() id : any=10;
  allMovies :any=[];
  movie?:movieData;
  constructor(private serve : DataFromDBServiceService){

  }
  
  getdata(){
      this.serve.getMovie().subscribe((data:any) => {
        this.allMovies = data;
        console.log(this.allMovies);
        for(let item of this.allMovies){
          if(item._id==this.id){
            this.movie=item;
          }
        }
        console.log(this.movie)
      });
  }
  ngOnInit(){
    this.getdata();
  }
  ngOnChanges(changes : SimpleChanges){
      this.id=changes['id'].currentValue;
  }
}
