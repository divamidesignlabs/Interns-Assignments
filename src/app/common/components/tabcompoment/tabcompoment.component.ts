import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabcompoment',
  templateUrl: './tabcompoment.component.html',
  styleUrls: ['./tabcompoment.component.scss']
})
export class TabcompomentComponent {
  @Input() tabArray : string[]=[];
  @Input() joined : any;
  @Input() suggested : any;
  @Output() tabStatusEmitter = new EventEmitter<number>;
  heading : string = "Example Heading";
  joinedStatus : boolean = true;
  suggestedStatus : boolean = false

ngOnInit(){
  console.log(this.joined)
}

sendTabStatus(i:any){
  if(i==1){
    this.joinedStatus = false;
    this.suggestedStatus = true;
  }
  else{
    this.joinedStatus=true;
    this.suggestedStatus = false;
  }
  this.tabStatusEmitter.emit(i);
}
}
