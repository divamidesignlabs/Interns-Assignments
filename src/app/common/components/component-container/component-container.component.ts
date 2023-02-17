import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-component-container',
  templateUrl: './component-container.component.html',
  styleUrls: ['./component-container.component.scss']
})
export class ComponentContainerComponent {
  @Input() componentLogoUrl : string = "";
  @Input() componentName : string = "";

  constructor( private route : Router){
  }

  toNavigate(){
    if(this.componentName=="Create New project"){
      this.route.navigate(['project-creation']);
    }
  }
}
