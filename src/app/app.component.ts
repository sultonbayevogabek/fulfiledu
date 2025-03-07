import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MobileMenuComponent } from './core/mobile-menu/mobile-menu.component';
import { IntroComponent } from './core/intro/intro.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MobileMenuComponent,
    IntroComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'fulfiledu';
}
