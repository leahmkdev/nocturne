import { Component } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  backgroundImage = '/images/home-bg.jpg';
  revealed = false;


    onTaglineDone(event: AnimationEvent): void {
      if (event.animationName === 'fade-out') return;
      setTimeout(() => (this.revealed = true), 600);
    }
}
