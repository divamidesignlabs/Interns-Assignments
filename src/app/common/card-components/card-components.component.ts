import { Component,Input } from '@angular/core';
@Component({
  selector: 'app-card-components',
  templateUrl: './card-components.component.html',
  styleUrls: ['./card-components.component.css']
})
export class CardComponentsComponent {
    @Input() item:any
    transformMinute(value: number): string {
      let hours = Math.floor(value / 60);
      let minutes = Math.floor(value % 60);
      return hours + ' hrs ' + minutes + ' mins';
    }
}
