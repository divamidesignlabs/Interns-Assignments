import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieGenreSeperatedWithSlash'
})
export class MovieGenreSeperatedWithSlashPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const words = value.split(',').map(w => w.trim());
    return words.join('/');
  }

}
