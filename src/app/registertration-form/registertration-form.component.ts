import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FooterComponent } from '../common/header/footer/footer.component';
import { projectData } from '../interfaces/alertInterface';


@Component({
  selector: 'app-registertration-form',
  templateUrl: './registertration-form.component.html',
  styleUrls: ['./registertration-form.component.scss']
})
export class RegistertrationFormComponent {
  

  // form control for user registration details about the new project
  registerForm = new FormGroup({
    profilePic : new FormControl(''),
    projectTitle : new FormControl(''),
    prjectDescription : new FormControl(''),
    projectPrivacy : new FormControl('')
  })

  // project details are stored and send these values to the flow
  projectDetails: projectData = 
  {
    projectTitle : '',
    projectDescription: '',
    projectPrivacy: '',
  }

  // form validation and get the values of the all form controls
  onFormSubmit()
  {
      this.projectDetails.projectTitle = this.registerForm.value.projectTitle as string;
      this.projectDetails.projectDescription = this.registerForm.value.prjectDescription as string;
      this.projectDetails.projectPrivacy = this.registerForm.value.projectPrivacy as string;
      console.log(this.projectDetails)
  }

  

}
