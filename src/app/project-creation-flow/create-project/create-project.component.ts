import { Component } from '@angular/core';
import { Toast } from 'src/app/model/consts';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {

  showToast: boolean = false; // use this to toggle toast
  toastData: Toast = {
    type: "success",
    msg: 'sooooooooooooooooo',
    time: 2000
  }
}
