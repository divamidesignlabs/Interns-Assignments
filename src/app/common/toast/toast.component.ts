import { Component ,Input } from '@angular/core';
import { ToastMessage } from 'src/app/interfaces/toast-message';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() toastdata!:ToastMessage;
}
