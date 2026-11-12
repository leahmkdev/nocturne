import { Component, signal, computed } from '@angular/core';
import { Toggle, DayId } from '../../layout/toggle/toggle';

interface Artist {
  id: string;
  photo: string;
  photoAlt: string;
  name: string;
  day: DayId;
  location: string;
  genre: string;
  tier: 'headliner' | 'supporting' | 'opening';
  time: string;
  billing: number;
}

@Component({
  imports: [Toggle],
  standalone: true,
  selector: 'app-lineup',
  styleUrl: './lineup.css',
  templateUrl: './lineup.html',
})
export class Lineup {
  selectedDayId = signal<DayId>('fri');
  private selectedArtistId = signal<string | null>(null);

  artists: Artist[] = [
     {
      id: 'vela-noir',
      photo: '/images/vela-noir.jpg',
      photoAlt: 'Vela Noir',
      name: 'Vela Noir',
      day: 'fri',
      genre: 'Alt R&B',
      tier: 'headliner',
      time: '10:15 PM',
      location: 'Los Angeles',
      billing: 1
    },
      {
      id: 'moth-club',
      photo: '/images/moth-club.jpg',
      photoAlt: 'Moth Club',
      name: 'Moth Club',
      day: 'fri',
      genre: 'Indie Rock',
      tier: 'opening',
      time: '9:00 PM',
      location: 'New York',
      billing: 2
    },
    {
      id: 'solara',
      photo: '/images/solara.jpg',
      photoAlt: 'Solara',
      name: 'Solara',
      day: 'fri',
      genre: 'Neo Soul',
      tier: 'supporting',
      time: '8:00 PM',
      location: 'Oakland',
      billing: 3
    },

    {
      id: 'jasper-tide',
      photo: '/images/jasper-tide.jpg',
      photoAlt: 'Jasper Tide',
      name: 'Jasper Tide',
      day: 'fri',
      genre: 'Indie Rock',
      tier: 'supporting',
      time: '7:00 PM',
      location: 'Portland',
      billing: 4
    },
    {
      id: 'nova-8',
      photo: '/images/nova-8.jpg',
      photoAlt: 'NOVA/8',
      name: 'NOVA/8',
      day: 'sat',
      genre: 'Electronic',
      tier: 'headliner',
      time: '10:15 PM',
      location: 'Los Angeles',
      billing: 1
    },
      {
      id: 'mara-bloom',
      photo: '/images/mara-bloom.jpg',
      photoAlt: 'Mara Bloom',
      name: 'Mara Bloom',
      day: 'sat',
      genre: 'Alternative',
      tier: 'opening',
      time: '9:00 PM',
      location: 'London',
      billing: 2
    },
    {
      id: 'the-velvet-hour',
      photo: '/images/the-velvet-hour.jpg',
      photoAlt: 'The Velvet Hour',
      name: 'The Velvet Hour',
      day: 'sat',
      genre: 'Dream Pop',
      tier: 'supporting',
      time: '8:00 PM',
      location: 'Seattle',
      billing: 3
    },
  {
      id: 'saint-sunday',
      photo: '/images/saint-sunday.jpg',
      photoAlt: 'Saint Sunday',
      name: 'Saint Sunday',
      day: 'sat',
      genre: 'Indie',
      tier: 'supporting',
      time: '7:00 PM',
      location: 'Austin',
      billing: 4
    }
  ]

  //filter the days artists
  dayArtists = computed(() =>
  this.artists.filter(a => a.day === this.selectedDayId())
.sort((a, b) => a.billing - b.billing));

  //select artist or first by default
  active = computed(() => {
    const dayList = this.dayArtists();
    return dayList.find(a => a.id === this.selectedArtistId()) ?? dayList[0];
  })

  selectDay(day: DayId) {
    this.selectedDayId.set(day);
    this.selectedArtistId.set(null);
  }

  selectArtist(artistId: string) {
    this.selectedArtistId.set(artistId);
  }

};
