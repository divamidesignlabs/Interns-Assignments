import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() card:Card={
    image_path: '',
    title: ''
  }
  ngOnInit(){
    console.log(this.card);
  }
}
