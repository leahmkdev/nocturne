import { Injectable, signal } from "@angular/core";
import { DayId } from '../layout/toggle/toggle';

@Injectable({ providedIn: 'root'})

export class DayState {
  selected = signal<DayId>('fri');
}
