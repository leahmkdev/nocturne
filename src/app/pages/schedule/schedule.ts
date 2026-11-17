import { Component, computed, InjectableProvider, inject } from '@angular/core';
import { Toggle } from '../../layout/toggle/toggle';
import { ClockPipe } from '../../data/clock-pipe';
import { DayState } from '../../data/day-state';
import { SCHEDULE } from '../../data/festival-data';

@Component({
  imports: [Toggle, ClockPipe],
  standalone: true,
  selector: 'app-schedule',
  styleUrl: './schedule.css',
  templateUrl: './schedule.html',
})
export class Schedule {

  protected readonly selectedDayId = inject(DayState).selected;

  protected readonly items = computed(() =>
    SCHEDULE
      .filter(i => i.day === this.selectedDayId())
      .sort((a, b) => a.start.localeCompare(b.start))
    );
}
