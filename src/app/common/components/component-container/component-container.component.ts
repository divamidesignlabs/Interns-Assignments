import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-container',
  templateUrl: './component-container.component.html',
  styleUrls: ['./component-container.component.scss']
})
export class ComponentContainerComponent {
  @Input() componentLogoUrl : string = "";
  @Input() componentName : string = "";

}
