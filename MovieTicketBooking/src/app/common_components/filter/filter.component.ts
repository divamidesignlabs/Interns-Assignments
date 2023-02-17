import { Component, Input } from '@angular/core';
import { FilterChoices } from 'src/app/models/interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  @ Input() filterChoices:FilterChoices={
    summary: "Languages",
    listOfChoices: ["English","Hindi","Tamil","Telugu","Marathi","Malayalam","Kanada","Punjabi","Gujarati","Bengali"]
  }
  // summary:string="Languages"
  // listofchoices:string[]=["English","Hindi","Tamil","Telugu","Marathi","Malayalam","Kanada","Punjabi","Gujarati","Bengali"]

}
