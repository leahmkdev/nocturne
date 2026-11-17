import { Pipe, PipeTransform } from '@angular/core';
//Pipe transforms the schedule time from 24 hr to 12
@Pipe({
  name: 'clock',
  standalone: true
})
export class ClockPipe implements PipeTransform {
    transform(start: string): string {
    const [h, m] = start.split(':').map(Number);
    return `${h % 12 || 12}:${String(m).padStart(2, '0')} ${h < 12 ? 'AM' : 'PM'}`;
  }
}
