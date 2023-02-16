import { Component,Input } from '@angular/core';
import { header } from '../Interfaces/interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() headerList:header[]=[]
  ngOnInit(){
    console.log(this.headerList)
  }

}
