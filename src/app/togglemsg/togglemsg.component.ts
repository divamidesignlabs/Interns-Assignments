import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-togglemsg',
  templateUrl: './togglemsg.component.html',
  styleUrls: ['./togglemsg.component.css']
})
export class TogglemsgComponent {
@Input() teamMemberNames:any=[]
activatedUserindex=-1;

}
