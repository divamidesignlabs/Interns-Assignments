import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent {
@Input() teamslist:any=[]
activatedTeam:number=-1;
activetheteam(index:number){
  this.activatedTeam=index
}

activatedteamindex=-1
@Output() displayteammembers=new EventEmitter()
methodname(){
  this.displayteammembers.emit(this.activatedteamindex);
  console.log(this.activatedteamindex)
}
teamMembers :any =[{image:`assets/qarma-testing-team-imgs/teammember-q-testing-team.svg`,Name:'Shyam',email:'Shyam@gmail.com',forextrainformation:'...',teamName:'TestingTeam'},
{image:`assets/qarma-testing-team-imgs/qaram-testing-team-2.svg`,Name:'madhu',email:'Madhu@gmail.com',forextrainformation:'...',teamName:'BackendTeam'},

{image:`assets/qarma-testing-team-imgs/teammember-q-testing-team.svg`,Name:'bindhu',email:'bindhu@gmail.com',forextrainformation:'...',teamName:'Automation'},
{image:`assets/qarma-testing-team-imgs/teammember-q-testing-team.svg`,Name:'sindhu',email:'Madhu@gmail.com',forextrainformation:'...',teamName:'ManualTestingTeam'},
{image:`assets/qarma-testing-team-imgs/teammember-q-testing-team.svg`,Name:'Shyam',email:'Shyam@gmail.com',forextrainformation:'...',teamName:'TestingTeam'},

]
displaymsg:boolean=true;
displaytoggle(){
  this.displaymsg =false;
}
}
