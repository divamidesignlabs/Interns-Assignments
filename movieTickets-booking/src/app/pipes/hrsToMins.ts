import { Pipe, PipeTransform } from '@angular/core';
// pipe to convert min to hrs min
@Pipe({ name: 'minutesToHours' })
export class MinutesToHoursPipe implements PipeTransform {
  transform(min: number): string {
    const hours = Math.floor(min/60);
    // remaining minutes
    const minutes = min%60;
    // returning result
    return `${hours}hr ${minutes}mins`;
  }
}
