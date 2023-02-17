import { Component } from '@angular/core';
// const { v4: uuidv4 } = require('uuid');

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  // toasts : Array<Object>
  /* {
    toastType : success/error/invalid,
    message : toastMessage 
    id : unique Identifer
    class : className for fontAwesomeicon
  }*/

  toasts: Array<any> = [];
  // Function to add toast component inside toastBox
  showToast(type: string): void {
    console.log('here ');

    // Switch block that assigns message based off type of error
    let toastDetails: any = { toastType: '', class: '', message: '', id: '' };

    switch (type) {
      case 'success':
        toastDetails.class = `fa-solid fa-circle-success`;
        toastDetails.message = 'Successfully Added !';
        toastDetails.id = this.generateRandomID();
        toastDetails.toastType = 'success';
        break;
      case 'failure':
        toastDetails.class = 'fa-solid fa-circle-error';
        toastDetails.message = 'Error From Server !';
        toastDetails.id = this.generateRandomID();
        toastDetails.toastType = 'failure';

        break;
      case 'invalid':
        toastDetails.class = 'fa-solid fa-circle-invalid';
        toastDetails.message = 'Invalid Details !';
        toastDetails.id = this.generateRandomID();
        toastDetails.toastType = 'invalid';

        break;
    }
    this.toasts.push(toastDetails);
    this.hideToast(toastDetails.id);
  }
  // hideToast method()
  hideToast(toastId: any): void {
    console.log('Atleast reaches here');

    setTimeout(() => {
      this.toasts = [...this.toasts.filter((toast) => toast.id !== toastId)];
      console.log(this.toasts);
    }, 3000);
    console.log('Done');
  }
  // Remove Toast when clicked
  removeToast(toastId: string): void {
    this.toasts = [...this.toasts.filter((toast) => toast.id !== toastId)];
  }
  // Generate Random ID
  generateRandomID(): string {
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    return s4() + '-' + s4();
  }
}
