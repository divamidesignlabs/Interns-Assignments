import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketsCost'
})
export class TicketsCostPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // to generate the total ticket cost based on no:of tickets
    return parseInt(value)*250;
  }

}
