import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  // image urls for the slider images
  images = [
    {url:'assets/Assets/banner 3.png'},
    {url:'assets/Assets/banner 1.png'},
    {url:'assets/Assets/banner 2.png'}
  ]
}
