import { Component } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-running-shows',
  templateUrl: './running-shows.component.html',
  styleUrls: ['./running-shows.component.scss']
})
export class RunningShowsComponent {
  cards:any;
  constructor(private movieData:MovieDataService){}

  ngOnInit(){
    this.movieData.getMovieList().subscribe((response)=>{
      console.log(response);
      this.cards=response;
    })
  }
  getData(event:any){
    this.cards=event;
    console.log("Hii");
    console.log(this.cards)
  }
  resetFilter(event:any){
    this.movieData.getMovieList().subscribe((response)=>{
      console.log(response);
      this.cards=response;
    })
    let checkedList1 = document.getElementsByName("language");
    let checkedList2 = document.getElementsByName("Genre");
    let removeDuplicates:any[]=[]
    let a:any[]=[];
    for(let i=0;i<checkedList1.length;i++){
      (checkedList1[i] as HTMLInputElement).checked=false;
    }
      for(let i=0;i<checkedList2.length;i++){
        (checkedList2[i] as HTMLInputElement).checked=false;
      }
  }
}
