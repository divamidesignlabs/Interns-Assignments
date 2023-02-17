import { Component, Input, OnInit } from '@angular/core';
interface carouselImage {
  imgSrc: string;
  imgAlt: string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() images!: carouselImage[];
  @Input() autoSlide: boolean = true;
  constructor() {}
  ngOnInit(): void {
    // making use of dummy data to check if
    // component works properly
    this.images = [
      {
        imgSrc:
          'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imgAlt: 'nature1',
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imgAlt: 'nature2',
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
        imgAlt: 'person1',
      },
      {
        imgSrc:
          'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        imgAlt: 'person2',
      },
    ];
    // Allow auto-sliding in carousel only if
    // autoSlide is set to true.
    if (this.autoSlide) {
      this.autoMove();
    }
  }

  // variable that keeps track of selected index in carousel
  selectedIndex: number = 0;
  // function to change selected image when user clicks on a dot.
  selectImage(index: number) {
    this.selectedIndex = index;
  }
  // Function that will change the selectedIndex.
  // selected index will reset back to 0 if selectedIndex
  //  is in the last array position
  onNextClick(): void {
    if (this.selectedIndex === this.images.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
    // this.selectedIndex === this.images.length - 1 ? 0 : this.selectedIndex++;
  }

  autoMove(): void {
    setInterval(() => {
      this.onNextClick();
    }, 3000);
  }
}
