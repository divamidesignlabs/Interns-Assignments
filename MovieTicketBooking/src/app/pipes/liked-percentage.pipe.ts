import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likedPercentage'
})
export class LikedPercentagePipe implements PipeTransform {

  transform(value: number, args: number): unknown {
    // if the data we get is null retrun "--" else generate liked count percentage
    const dislikCount:number=args;
    if(value==null)
    {
      return "--"
    }
    else
    {
      return Math.trunc(((value)*100)/(value+dislikCount));
    }
    
  }

}
