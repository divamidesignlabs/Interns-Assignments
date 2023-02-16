import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-project-creation-form',
  templateUrl: './project-creation-form.component.html',
  styleUrls: ['./project-creation-form.component.css']
})
export class ProjectCreationFormComponent {
form=new FormGroup({
  projectIcon:new FormControl(""),
  projectName:new FormControl(""),
  projectDescription:new FormControl(""),
  
}

)
}
