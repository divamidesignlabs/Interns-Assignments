import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filer-component',
  templateUrl: './filer-component.component.html',
  styleUrls: ['./filer-component.component.scss']
})
export class FilerComponentComponent {
// decloration
isselected: string='';
// passing data to the parent component
@Input()filterDataItem: any[] = [];
@Input()checkboxes: any[] = []; 
languages=['telugu','hindi','english']
generes=['action','comedy','triller']
dates=['12th-Jan-2023','13th-Jan-2023','10th-Jan-2023','17th-Jan-2023']
}
