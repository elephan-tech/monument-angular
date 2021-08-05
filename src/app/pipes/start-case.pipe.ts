import { startCase } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startCase'
})
export class StartCasePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {

    return value ? startCase(value) : startCase('');
  }

}
