import { Component } from '@angular/core';

@Component({
  selector: 'app-running-shows',
  templateUrl: './running-shows.component.html',
  styleUrls: ['./running-shows.component.scss']
})
export class RunningShowsComponent {

cards:any[]=[
  {
    _id: 9,
    dislike_count: 5000,
    duration: 143,
    genre: "Action, Sci-Fi",
    language: "English, Hindi, Tamil, Telegu",
    like_count: 100000000,
    name: "The bheem",
    pg_rating: "PG_13",
    poster_url: "https://www.imdb.com/title/tt0848228/mediaviewer/rm3955117056/?ref_=tt_ov_i",
    release_date: "2012-05-11T18:30:00.000Z",
    released: "1",
    show_times: "09:30, 12:30, 15:30, 20:30, 22:00",
    synopsis: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    trailer_url: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
  },
  {
    _id: 9,
    dislike_count: 5000,
    duration: 143,
    genre: "Action, Sci-Fi",
    language: "English, Hindi, Tamil, Telegu",
    like_count: 100000000,
    name: "The Avengers",
    pg_rating: "PG_13",
    poster_url: "https://www.imdb.com/title/tt0848228/mediaviewer/rm3955117056/?ref_=tt_ov_i",
    release_date: "2012-05-11T18:30:00.000Z",
    released: "1",
    show_times: "09:30, 12:30, 15:30, 20:30, 22:00",
    synopsis: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    trailer_url: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
  },
  {
    _id: 9,
    dislike_count: 5000,
    duration: 143,
    genre: "Action, Sci-Fi",
    language: "English, Hindi, Tamil, Telegu",
    like_count: 100000000,
    name: "The Sita",
    pg_rating: "PG_13",
    poster_url: "https://www.imdb.com/title/tt0848228/mediaviewer/rm3955117056/?ref_=tt_ov_i",
    release_date: "2012-05-11T18:30:00.000Z",
    released: "1",
    show_times: "09:30, 12:30, 15:30, 20:30, 22:00",
    synopsis: "Earths mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    trailer_url: "https://www.youtube.com/watch?v=eOrNdBpGMv8",
  }
  
]

}
