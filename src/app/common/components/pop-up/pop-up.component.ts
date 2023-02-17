import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss'],
})
export class PopUpComponent {
  // boolean flag that checks whether modal is open or not
  isModalOpen: boolean = false;
  // Username data which will be passed dynamically
  userName: string = 'test';
  // method that switches toggled state for modal popup
  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen;
  }
}
