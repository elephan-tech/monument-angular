import { startCase } from 'lodash';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (!value) { return '' };
    const [hour, minute, second] = value.split(':');

    const hourMap = {
      '00': {time: 12, am: true},
      '01': {time: 1, am: true},
      '02': {time: 2, am: true},
      '03': {time: 3, am: true},
      '04': {time: 4, am: true},
      '05': {time: 5, am: true},
      '06': {time: 6, am: true},
      '07': {time: 7, am: true},
      '08': {time: 8, am: true},
      '09': {time: 9, am: true},
      10: {time: 10, am: true},
      11: {time: 11, am: true},
      12: {time: 12, am: false},
      13: {time: 1, am: false},
      14: {time: 2, am: false},
      15: {time: 3, am: false},
      16: {time: 4, am: false},
      17: {time: 4, am: false},
      18: {time: 6, am: false},
      19: {time: 7, am: false},
      20: {time: 8, am: false},
      21: {time: 9, am: false},
      22: {time: 10, am: false},
      23: {time: 11, am: false},
      24: {time: 12, am: true},
    };

    return `${hourMap[hour].time}:${minute} ${hourMap[hour].am ? 'AM' : 'PM'}`;
  }

}
