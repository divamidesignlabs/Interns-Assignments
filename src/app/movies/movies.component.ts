import { Component } from '@angular/core';
import{MovieService} from '../services/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
   moviePosters=['assets/movie-imgs/poster 1.png','assets/movie-imgs/poster 2.png','assets/movie-imgs/poster 3.png','assets/movie-imgs/poster 1.png','assets/movie-imgs/poster 2.png','assets/movie-imgs/poster 3.png','assets/movie-imgs/poster 1.png','assets/movie-imgs/poster 1.png']
   movieDetails:any[]=[]
   minutes:number=0;
   constructor(private dataservice:MovieService){}
   ngOnInit(){this.dataservice.getposts().subscribe((res)=>{
       this.movieDetails=res
     console.log(this.movieDetails)
     })
   }
    convertToHoursMinutes(duration: number) {
    let hours = Math.floor(duration / 60); 
    let remainingMinutes = duration % 60; 
  
    return hours + " hrs " + remainingMinutes + " mins";
  }
   percentage(num:any, per:any)
{
  
  return Math.floor((num/per)*100) +" % ";
}
}
