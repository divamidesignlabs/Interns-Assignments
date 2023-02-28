import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';

@Pipe({
  name: 'mintesToHoursAndMinutes'
})
export class MintesToHoursAndMinutesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    // convertthe time given into minutes and hrs format
    const hours = Math.floor(value / 60);
    const mins = value % 60;
    return `${hours}hr ${mins}mins`;
  }

}
