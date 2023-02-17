import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.scss']
})
export class HeadercomponentComponent {

  constructor(private route : Router){

  }
  navigateToProject(){

    this.route.navigate(['configured-projects']);
  }

}
