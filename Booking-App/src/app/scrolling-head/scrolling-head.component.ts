import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';

@Component({
  selector: 'app-scrolling-head',
  templateUrl: './scrolling-head.component.html',
  styleUrls: ['./scrolling-head.component.scss']
})
export class ScrollingHeadComponent {
  

  tutorials: any;
  
    constructor(private primengConfig: PrimeNGConfig) { }
  
    ngOnInit() {
        // this.tutorials = [
        //   'assets/images/popcorn-image.png',
        
        //   'assets/images/popcorn-image.png',
                
        //   'assets/images/popcorn-image.png'
        // ];
}

// export interface Tutorial {
//   title?: String;
//   image?: String;
// }
}

