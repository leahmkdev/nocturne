import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Category {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  link?: {label: string, path: string}
}

@Component({
  imports: [RouterLink],
  standalone: true,
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly categories: Category[] = [
    {
      id: 'music',
      title: 'Music',
      description: 'Live performances, late-night sets and sounds worth staying out for',
      highlights: [
        '2 immersive stages',
        'Over 8 live artists & DJs',
        'Indie, Electronic & Alternative',
        'Sunset performances'
      ],
      link: {
        label: 'See the lineup',
        path: '/lineup'
      }
    },
     {
      id: 'art',
      title: 'Art',
      description: 'Immersive installations, interactive works and art hidden throughout the grounds',
      highlights: [
        'Large scale installations',
        'Interactive exhibits',
        'Live mural painting',
        'Nighttime light displays'
      ],
      link: {
        label: 'See the schedule',
        path: '/schedule'
      }
    },
     {
      id: 'food',
      title: 'Food',
      description: 'Local flavors, late-night bites and festival favorites',
      highlights: [
        'Local food vendors',
        'Global street vendors',
        'Vegan and Vegetarian options',
        'Craft drinks and cocktails'
      ]
     
    }
  ] 


}
