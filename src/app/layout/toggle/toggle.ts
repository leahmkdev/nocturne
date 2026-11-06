import { Component, model } from '@angular/core';

export type DayId = 'fri' | 'sat';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-toggle',
  styleUrl: './toggle.css',
  templateUrl: './toggle.html',
})
export class Toggle {
 protected readonly days: { id: DayId; label: string}[] = [
  { id: 'fri', label: 'Fri Oct 24'},
  { id: 'sat', label: 'Sat Oct 25'},
 ];

  value = model<string>();

  flip() {
    this.value.update(v => (v === 'fri' ? 'sat' : 'fri'));
  }
}
