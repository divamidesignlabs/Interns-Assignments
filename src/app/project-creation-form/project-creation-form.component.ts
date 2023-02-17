import { Component } from '@angular/core';
import { FormGroup,FormControl,FormsModule, NgModel,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { popupInterface } from 'dataInterface';
@Component({
  selector: 'app-project-creation-form',
  templateUrl: './project-creation-form.component.html',
  styleUrls: ['./project-creation-form.component.css']
})
export class ProjectCreationFormComponent {
form=new FormGroup({
  projectIcon:new FormControl("",Validators.compose([Validators.required])),
  projectName:new FormControl(""),
  projectDescription:new FormControl(""),

}
)
enablePersonal=true;
enablePublic=false;
navList:any;
constructor(private route:Router){
    this.navList = this.route.getCurrentNavigation()?.extras.state?.['navList'];
}
disablePublic(){
  this.enablePublic=false;
}
disablePersonal(){
  this.enablePersonal=false;
}
enablePopup=0;
popup:popupInterface={
  heading:"Project name is required",
  buttons:["Ok"]
}
popupAction(event:any){
  if(event=="Ok")
  {
    this.enablePopup=0;
  }
}
navToCreateProject(){
  if(this.form.get('projectName')?.value)
  this.route.navigate(['projectCreationForm/projectCreationAcknowledgement'],{state:{pName:this.form.get('projectName')?.value}})
  else
  this.enablePopup=1;
}
}
