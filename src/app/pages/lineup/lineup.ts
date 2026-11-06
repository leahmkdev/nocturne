import { Component, signal, computed } from '@angular/core';
import { Toggle, DayId } from '../../layout/toggle/toggle';

interface Artist {
  id: string;
  photo: string;
  photoAlt: string;
  name: string;
  day: DayId;
  genre: string;
  tier: 'headliner' | 'supporting' | 'opening';
  time: string;
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

  artists: Artist[] = [
     {
      id: '0',
      photo: 'vela-noir.jpg',
      photoAlt: 'Vela Noir',
      name: 'Vela Noir',
      day: 'fri',
      genre: 'Alt R&B',
      tier: 'headliner',
      time: '10:15 PM'
    },
      {
      id: '1',
      photo: 'moth-club.jpg',
      photoAlt: 'Moth Club',
      name: 'Moth Club',
      day: 'fri',
      genre: 'Indie Rock',
      tier: 'opening',
      time: '9:00 PM'
    },
    {
      id: '2',
      photo: 'solara.jpg',
      photoAlt: 'Solara',
      name: 'Solara',
      day: 'fri',
      genre: 'Neo Soul',
      tier: 'supporting',
      time: '7:00 PM'
    },

    {
      id: '3',
      photo: 'jasper-tide.jpg',
      photoAlt: 'Jasper Tide',
      name: 'Jasper Tide',
      day: 'fri',
      genre: 'Indie Rock',
      tier: 'supporting',
      time: '8:00 PM'
    },
    {
      id: '4',
      photo: 'the-velvet-hour.jpg',
      photoAlt: 'The Velvet Hour',
      name: 'The Velvet Hour',
      day: 'sat',
      genre: 'Dream Pop',
      tier: 'headliner',
      time: '10:15 PM'
    },
      {
      id: '5',
      photo: 'mara-bloom.jpg',
      photoAlt: 'Mara Bloom',
      name: 'Mara Bloom',
      day: 'sat',
      genre: 'Alternative',
      tier: 'opening',
      time: '9:00 PM'
    },
    {
      id: '6',
      photo: 'nova-8.jpg',
      photoAlt: 'Nova/8',
      name: 'Nova/8',
      day: 'sat',
      genre: 'Electronic',
      tier: 'supporting',
      time: '8:00 PM'
    },
  {
      id: '7',
      photo: 'saint-sunday.jpg',
      photoAlt: 'Saint Sunday',
      name: 'Saint Sunday',
      day: 'sat',
      genre: 'Indie',
      tier: 'supporting',
      time: '7:00 PM'
    }
  ]

  visibleArtists = computed(() =>
     this.artists.filter(a => a.day === this.selectedDayId()));

};
