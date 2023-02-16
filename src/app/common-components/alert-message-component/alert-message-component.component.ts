import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertInterface } from 'src/app/modles/common modles';

@Component({
  selector: 'app-alert-message-component',
  templateUrl: './alert-message-component.component.html',
  styleUrls: ['./alert-message-component.component.scss']
})
export class AlertMessageComponentComponent {

  @Input()alertContent: AlertInterface={
    Optiontype: '',
    question: '',
    label: '',
    decription: '',
    description_points: [],
    
  };
  
  
  @Input() buttons: string[]=[];
  @Output() buttonClicked: EventEmitter<number> = new EventEmitter();
  selectedIndex: number | undefined;
  Alert: any;
  Alertcomponent:any='';

  handleButton(index: number): void {
    this.selectedIndex = index;
    this.buttonClicked.emit(index);
    
  }


  }


