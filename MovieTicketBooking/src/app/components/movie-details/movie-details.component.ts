import { Component ,EventEmitter } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  synopsisDetails: string=''; //storing the synopsis of a movie
  trailer:string='';  //storing thr url of trailer
  // movieItemData: string='';  //storing the movie data
  coupons:{source:string}[]=[     // list of coupons
    {"source":"../assets/moviedetails/coupon banner 1.png"},
    {"source":"../assets/moviedetails/coupon banner 2.png"}
  ];
  poster:string='';  //storing the poster url
  videos: {source:string,description:string,dateforvideo:string}[]=[    
    {"source":"../assets/moviedetails/detailspage2.png", "description":"5 reasons to watch Captain Marvel" , "dateforvideo":"23 March"},
    {"source":"../assets/moviedetails/detailspage1.png", "description":"Captain Marvel latest sneak peak video" , "dateforvideo":"15 September"}
  ]   //list of video imgs 
  constructor(private data:MovieDataService ){
    
    
  }
  ngOnInit()
  {
    //retrieving the service data
    this.data.getSynopsis(this.data.id).subscribe((res)=>{
      console.log(res);
      this.synopsisDetails=res.synopsis;
      this.poster=res.poster_url 
      this.trailer=res.trailer_url

      console.log(this.poster)
    }) 
  }
}
