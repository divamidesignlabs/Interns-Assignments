import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'replace' })
export class ReplacePipe implements PipeTransform {
  transform(input: string): string {
    return input.replace(new RegExp(',', 'g'), '/');
  }
}
