import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-configured-projects',
  templateUrl: './configured-projects.component.html',
  styleUrls: ['./configured-projects.component.scss']
})
export class ConfiguredProjectsComponent {

  projectsFromDB : any[]=[];
  constructor(private serve : ServiceService){

  }

  ngOnInit(){
    this.serve.getProjectsFromDB().subscribe((res)=>{
      this.projectsFromDB = res;
      console.log("this is after recevindsjfsa", this.projectsFromDB, res);
    });
}
}
