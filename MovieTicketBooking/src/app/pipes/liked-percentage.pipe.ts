import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'likedPercentage'
})
export class LikedPercentagePipe implements PipeTransform {

  transform(value: number, args: number): unknown {
    const dislikCount:number=args;
    return Math.trunc(((value)*100)/(value+dislikCount));
  }

}
