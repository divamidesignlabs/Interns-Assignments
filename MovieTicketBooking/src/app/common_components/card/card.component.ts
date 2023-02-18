import { Component, Input } from '@angular/core';
import { MovieDataService } from 'src/app/services/movie-data.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() card:any; //to get movie detais
// card={
//   _id: 9,
//   dislike_count: 5000,
//   duration: 143,
//   genre: "Action, Sci-Fi",
//   language: "English, Hindi, Tamil, Telegu",
//   like_count: 100000000,
//   name: "The Avengers",
//   pg_rating: "PG_13",
//   poster_url: "https://www.imdb.com/title/tt0848228/mediaviewer/rm3955117056/?ref_=tt_ov_i",
//   release_date: "2012-05-11T18:30:00.000Z",
//   released: "1",
//   show_times: "09:30, 12:30, 15:30, 20:30, 22:00",
//   synopsis: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
//   trailer_url: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
// }
constructor(private getId :MovieDataService){

}
ngOnInit()
{
  this.getId.id=this.card._id; //storing the id in servises
}
// sendidToDetailsPage(_id:number){
//   console.log("I am here",_id);
//   this.getId.id=this.card._id;
// }

}
