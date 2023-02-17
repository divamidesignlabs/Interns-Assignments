import { Component } from '@angular/core';
import { containerInfo } from '../interfaces/alertInterface';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {


  // Data to be send to the common component 
  containerOneData: containerInfo=
  {
    imgSrc:"assets/images/container-imgs/container-search.svg",
    contentoDisplay: "Explore sample project",
  }

  containerTwoData: containerInfo=
  {
    imgSrc:"assets/images/container-imgs/container-pencil.svg",
    contentoDisplay: "Create new project",
  }

  constructor(private router:Router){}

  getNavigationStatus(event:boolean)
  {
    console.log(event)
    this.router.navigate(['create-project'], );
  }

}
