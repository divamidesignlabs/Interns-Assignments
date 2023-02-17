import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'minutesToHours' })
export class MinutesToHoursPipe implements PipeTransform {
  transform(min: number): string {
    const hours = Math.floor(min/60);
    const minutes = min%60;
    return `${hours}hr ${minutes}mins`;
  }
}
