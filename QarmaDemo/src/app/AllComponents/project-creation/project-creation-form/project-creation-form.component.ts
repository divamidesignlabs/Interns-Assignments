import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-creation-form',
  templateUrl: './project-creation-form.component.html',
  styleUrls: ['./project-creation-form.component.scss']
})
export class ProjectCreationFormComponent {

  namepattern = /^[a-zA-Z]+[a-zA-Z]$/;

  formData = new FormGroup({ // formData is Form group name which contains respective form-controls and adding validators to each to validate respective input fields
    
    profilePhoto: new FormControl(""),
    
    projectName: new FormControl("", [
      Validators.required,
      Validators.minLength(3),Validators.maxLength(256),Validators.pattern(this.namepattern)]),

    projectDescription: new FormControl(""),


    });

    onFormSubmit(formData:any){}

}
