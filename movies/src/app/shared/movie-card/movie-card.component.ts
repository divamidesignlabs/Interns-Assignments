import { Component } from '@angular/core';
import { Pipe,PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';

@Pipe({
  name:'customPipe'
})
export class TimeConverter implements PipeTransform{  
    transform(value: any, ...args: any[]){
      return Math.ceil(value/60)+"hrs"+value%60+"mins"; //converting time into hrs and minutes
    }
}
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent { 
cardObject=[
  {
    imageUrl:"/assets/images/poster 1.png",
    title:"Gravity",
    certificate:"U/A",
    language:"En",
    genre:"Thriller/Action",
    duration:200,
    likes:1000

  }
]
}
