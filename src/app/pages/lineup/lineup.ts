import { Component, signal, computed, inject } from '@angular/core';
import { Toggle, DayId } from '../../layout/toggle/toggle';
import { ClockPipe } from '../../data/clock-pipe';
import { Artist, ARTISTS } from '../../data/festival-data';
import { DayState } from '../../data/day-state';


@Component({
  imports: [Toggle, ClockPipe],
  standalone: true,
  selector: 'app-lineup',
  styleUrl: './lineup.css',
  templateUrl: './lineup.html',
})
export class Lineup {
  protected readonly selectedDayId = inject(DayState).selected;
  private selectedArtistId = signal<string | null>(null);

  artists: Artist[] = ARTISTS;

  //filter the days artists
  dayArtists = computed(() =>
  this.artists.filter(a => a.day === this.selectedDayId())
.sort((a, b) => a.billing - b.billing));

  //select artist or first by default
  active = computed(() => {
    const dayList = this.dayArtists();
    return dayList.find(a => a.id === this.selectedArtistId()) ?? dayList[0];
  })


  selectArtist(artistId: string) {
    this.selectedArtistId.set(artistId);
  }

};
