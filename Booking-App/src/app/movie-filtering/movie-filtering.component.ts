import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-filtering',
  templateUrl: './movie-filtering.component.html',
  styleUrls: ['./movie-filtering.component.scss']
})
export class MovieFilteringComponent {
    isDate = false;
    isLanguage = false;
    isGenere = false;
    isVisible = true;

  currentDate = new Date();
    dateArray = [
      (this.currentDate.getDate() ) + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear(),
      (this.currentDate.getDate() + 1) + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear(),
      (this.currentDate.getDate() + 2) + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear(),
      (this.currentDate.getDate() + 3) + "/" + this.currentDate.getMonth() + "/" + this.currentDate.getFullYear()
    ];

  languagesArray = [
    'English',
    'Hindi',
    'Tamil',
    'Telugu',
    'Marathi',
    'Malayalam',
    'Kannada',
    'Punjabi',
    'Gujarati',
    'Bengali'

  ];

  genereArray = [
    'Action',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Drama',
    'Fantasy',
    'Horror',
    'Romantic',
    'Sci-fi',
    'Thriller'

  ]

  

  
}
