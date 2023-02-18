import { Component, EventEmitter, Output } from '@angular/core';
import { FilterChoices } from 'src/app/models/interfaces';
import { MovieDataService } from 'src/app/services/movie-data.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() sendData = new EventEmitter<any>()

  constructor(private movieData:MovieDataService){}
  filters:object={}
  runningMovies:any;
  temp:any;
  ngOnInit(){
    this.movieData.getMovieList().subscribe((response)=>{
      console.log(response);
      this.runningMovies=response;
      this.temp=response;
    })
  }
  filter(event:any){
    let checkedList1 = document.getElementsByName("language");
    let checkedList2 = document.getElementsByName("Genre");
    let removeDuplicates:any[]=[]
    let a:any[]=[];
    for(let i=0;i<checkedList1.length;i++){
      if((checkedList1[i] as HTMLInputElement).checked){
        let value=(checkedList1[i] as HTMLInputElement).value;
        console.log("value",value);
        var pattern:RegExp=new RegExp(value)
        this.temp.filter((item:any)=>{
          if(pattern.test(item.language)){
            a.push(item);
          }
        }
        )
      }
    }
    for(let i=0;i<checkedList2.length;i++){
      if((checkedList2[i] as HTMLInputElement).checked){
        let value=(checkedList2[i] as HTMLInputElement).value;
        console.log("value",value);
        var pattern:RegExp=new RegExp(value)
        this.temp.filter((item:any)=>{
          if(pattern.test(item.language)){
            a.push(item);
          }
        }
        )
      }
    }
    console.log("filter",a);
    removeDuplicates=a.filter((obj, index, self) =>
   index === self.findIndex((o) => o._id === obj._id)
    );
    console.log("dup",removeDuplicates);
    this.runningMovies=removeDuplicates;
    this.sendData.emit(this.runningMovies);

  }
}
