import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grandTotal'
})
export class GrandTotalPipe implements PipeTransform {
// to generate grand total of tickets
  transform(value: string, ...args: unknown[]): unknown {
    return parseInt(value)*250+200;
  }

}
