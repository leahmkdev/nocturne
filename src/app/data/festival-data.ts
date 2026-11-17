import { DayId } from "../layout/toggle/toggle";

export interface Artist {
  id: string;
  photo: string;
  photoAlt: string;
  name: string;
  day: DayId;
  city: string;
  genre: string;
  tier: 'headliner' | 'supporting' | 'opening';
  start: string;
  location: string;
  billing: number;
}

export interface ScheduleItem {
  id: string;
  day: DayId;
  start: string;
  name: string;
  location: string;
  artistId?: string;
}

export const ARTISTS: Artist[] = [
   {
      id: 'vela-noir',
      photo: '/images/vela-noir.jpg',
      photoAlt: 'Vela Noir',
      name: 'Vela Noir',
      day: 'fri',
      genre: 'Alt R&B',
      tier: 'headliner',
      start: '22:15',
      city: 'Los Angeles',
      billing: 1,
      location: 'Moon Stage'
    },
      {
      id: 'moth-club',
      photo: '/images/moth-club.jpg',
      photoAlt: 'Moth Club',
      name: 'Moth Club',
      day: 'fri',
      genre: 'Indie Rock',
      tier: 'opening',
      start: '21:00',
      city: 'New York',
      billing: 2,
      location: 'Eclipse Stage'
    },
    {
      id: 'solara',
      photo: '/images/solara.jpg',
      photoAlt: 'Solara',
      name: 'Solara',
      day: 'fri',
      genre: 'Neo Soul',
      tier: 'supporting',
      start: '19:00',
      city: 'Oakland',
      billing: 3,
      location: 'Moon Stage'
    },

    {
      id: 'jasper-tide',
      photo: '/images/jasper-tide.jpg',
      photoAlt: 'Jasper Tide',
      name: 'Jasper Tide',
      day: 'fri',
      genre: 'Indie Rock',
      tier: 'supporting',
      start: '20:00',
      city: 'Portland',
      billing: 4,
      location: 'Eclipse Stage'
    },
    {
      id: 'nova-8',
      photo: '/images/nova-8.jpg',
      photoAlt: 'NOVA/8',
      name: 'NOVA/8',
      day: 'sat',
      genre: 'Electronic',
      tier: 'headliner',
      start: '22:15',
      city: 'Los Angeles',
      billing: 1,
      location: 'Moon Stage'
    },
      {
      id: 'mara-bloom',
      photo: '/images/mara-bloom.jpg',
      photoAlt: 'Mara Bloom',
      name: 'Mara Bloom',
      day: 'sat',
      genre: 'Alternative',
      tier: 'opening',
      start: '21:00',
      city: 'London',
      billing: 2,
      location: 'Eclipse Stage'
    },
    {
      id: 'the-velvet-hour',
      photo: '/images/the-velvet-hour.jpg',
      photoAlt: 'The Velvet Hour',
      name: 'The Velvet Hour',
      day: 'sat',
      genre: 'Dream Pop',
      tier: 'supporting',
      start: '20:00',
      city: 'Seattle',
      billing: 3,
      location: 'Moon Stage'
    },
  {
      id: 'saint-sunday',
      photo: '/images/saint-sunday.jpg',
      photoAlt: 'Saint Sunday',
      name: 'Saint Sunday',
      day: 'sat',
      genre: 'Indie',
      tier: 'supporting',
      start: '19:00',
      city: 'Austin',
      billing: 4,
      location: 'Eclipse Stage'
    }
]

export const EVENTS: ScheduleItem[] = [
  {
    id: 'gates-fri',
    day: 'fri',
    start: '17:00',
    name: "Festival Gates Open",
    location: 'Main Entrance'
  },
  {
    id: 'art-installations',
    day: 'fri',
    start: '17:30',
    name: 'Live art & installations',
    location: 'Art District'
  },
  {
    id: 'food-stalls',
    day: 'fri',
    start: '18:00',
    name: 'Food vendors and local makers',
    location: 'Night Market'
  },
  {
    id: 'gates-sat',
    day: 'sat',
    start: '17:00',
    name: "Festival Gates Open",
    location: 'Main Entrance'
  },
  {
    id: 'art-installations',
    day: 'sat',
    start: '17:30',
    name: 'Live art & installations',
    location: 'Art District'
  },
  {
    id: 'food-stalls',
    day: 'sat',
    start: '18:00',
    name: 'Food vendors and local makers',
    location: 'Night Market'
  }
]

export const SCHEDULE: ScheduleItem[] = [
  ...EVENTS,
  ...ARTISTS.map( a => ({
    id: a.id, day: a.day, start: a.start,
    name: a.name, location: a.location, artistId: a.id,
  })),
];
