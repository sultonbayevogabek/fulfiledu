import { Component, computed, HostBinding, input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'intro',
  imports: [
    HeaderComponent
  ],
  standalone: true,
  templateUrl: './intro.component.html',
  host: {
    'class': 'block bg-black bg-[url(/images/intro/background.jpg)] bg-center bg-cover'
  }
})

export class IntroComponent {
  heading = input<string>('Maqsadimiz, ilm orqali insonlar hayotini o\'zgartirish!');
}
