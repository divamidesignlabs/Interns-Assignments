import { Pipe, PipeTransform } from '@angular/core';
// pipe to convert ',' in genre to '/' separated
@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
  transform(input: string): string {
    return input.replace(new RegExp(',', 'g'), '/');
  }
}
