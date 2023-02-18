import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CrudServiceService } from '../crud-service.service';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss']
})

export class MovieCardsComponent {
allData : any;

  constructor(private service : CrudServiceService, private router : Router){}

  ngOnInit(){
    this.service.getAllUserFromService().subscribe(res => {
      this.allData = res;
      console.log(this.allData);

    });
  }

  // takes duration in mins, returns duration in x h y m format
  convertDurationToHours(duration:number){
    return `${Math.floor(duration/60)}hr ${duration%60}mins`;
  }

  likesIntoPercentage(like_count:number, dislike_count:number, released:number){

    if(released == 1){
    return Math.floor((like_count/(dislike_count + like_count))*100)+"%";
    }
    else{
      return '-';
    }
  }

movieSelected(num:number){

  this.router.navigate(['movie-details'],{
    state: { 'submittedData' : num }
    // relativeTo: this.activeroute
  });
}

}
