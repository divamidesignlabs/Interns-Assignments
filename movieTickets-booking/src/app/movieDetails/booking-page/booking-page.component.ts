import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';
// import { DataFromDBServiceService } from '../data-from-db-service.service';
import { MovieListService } from '../../services/movie-list.service';
import { Router, ActivatedRoute } from '@angular/router';

export interface movieData{
  id:number,
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

  id :number=10;
  allMovies :any=[];
  movie:any=[];
  castItems : string[]=["Juned","OOPS","Adi","Madhu","Vaishnavi"];
  constructor(private serve : MovieListService,private router:Router,private active: ActivatedRoute){
    
  }
 
  getdata(){
      this.serve.getMovieData().subscribe((data:any) => {
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
    // this.active.data.subscribe(data => {

    //   this.id = data['myId']});
    this.getdata();
    console.log(this.id);
  
}
  // ngOnChanges(changes : SimpleChanges){
  //     this.id=changes['id'].currentValue;
  // }
  navigateToBookTicket(){
    this.router.navigate(['booking-form']);
    
  }
}
