import { Component, computed, HostBinding, input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'intro',
  imports: [
    HeaderComponent
  ],
  templateUrl: './intro.component.html',
  host: {
    'class': 'block bg-black bg-[url(/images/intro/background.svg)] bg-center bg-cover'
  }
})

export class IntroComponent {
  type = input<'home' | 'pages'>('pages');

  @HostBinding('class.h-screen')
  isTypeHome = computed(() => this.type() === 'home');
}
