import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketsCost'
})
export class TicketsCostPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return parseInt(value)*250;
  }

}
