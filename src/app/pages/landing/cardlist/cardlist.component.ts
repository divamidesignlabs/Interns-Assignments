import { Component, OnInit } from '@angular/core';
import { MoviebookingService } from 'src/app/moviebooking.service';
@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  movieListArray:any
  constructor( private movieservice:MoviebookingService ){}
  
  ngOnInit(): void {
    this.movieservice.getListMovies().subscribe((res)=>{
      this.movieListArray=res
      console.log(this.movieListArray)
    })
}
}