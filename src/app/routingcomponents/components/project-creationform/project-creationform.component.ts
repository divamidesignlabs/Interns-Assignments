import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-project-creationform',
  templateUrl: './project-creationform.component.html',
  styleUrls: ['./project-creationform.component.scss']
})
export class ProjectCreationformComponent {
  form=new FormGroup({
    projectIcon:new FormControl(""),
    projectName:new FormControl(""),
    projectDescription:new FormControl(""),
    
  }
  
  )

}
