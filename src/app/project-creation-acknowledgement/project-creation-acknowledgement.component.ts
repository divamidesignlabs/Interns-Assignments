import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project-creation-acknowledgement',
  templateUrl: './project-creation-acknowledgement.component.html',
  styleUrls: ['./project-creation-acknowledgement.component.css']
})
export class ProjectCreationAcknowledgementComponent {
  givenProjectName:string="";
  acknowledgeMsg : String ="";
constructor(private router:Router){
   this.givenProjectName = this.router.getCurrentNavigation()?.extras.state?.['pName'];
   this.acknowledgeMsg="Successfully created project "+this.givenProjectName;

}
question="How would you like to proceed?";
card1={
  icon:"/assets/images/configure.svg",
  brief:"Configure dataset"
}
card2={
  icon:"/assets/images/assign.svg",
  brief:"Assign users"
}
card3={
  icon:"assets/images/view.svg",
  brief:"View project details"
}
cards=[this.card1,this.card2,this.card3]
action(val:any)
{
  console.log("lllll",val);
  if(val==this.card3.brief)
  {
      this.router.navigate(['projectCreationForm/projectCreationAcknowledgement/projectListingCardview'])
  }
  else if(val==this.card2.brief)
  {

  }
  else if(val==this.card1.brief)
  {

  }
}
}
