import { Component } from '@angular/core';
import { notify, tabsLabel } from './common-component/interfaces/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Qarma';
  popUpData:notify = {
    nameType:'Remove User',
    confirmation:'Are you sure you want to remove user',
    nameOf:'Anuja Kumari',
    unableTo:'By confirming this anujakumari wont be able to:',
    unableData:['1. Access any projects related to this Account','2. Any personal data synced to this Account'],
    button1:'Cancel',
    button2:'Remove User'
  }

  tabs : tabsLabel[]= [
    {label:' Joined'},
    {label:' Suggestions'},
    {label:' Requests'}   
  ]
  tabLabelsContent = ['This is Joined','This is Suggestions','This is requests'];


  toast:toast
   = {
    toastTitle:'Error',
    toastMessage:'There is a error'
  }
 
}
