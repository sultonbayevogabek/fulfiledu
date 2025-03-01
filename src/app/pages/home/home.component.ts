import { Component } from '@angular/core';
import { IntroComponent } from '../../core/intro/intro.component';
import { HistoryComponent } from './history/history.component';

@Component({
  selector: 'app-home',
  imports: [
    IntroComponent,
    HistoryComponent
  ],
  templateUrl: './home.component.html',
  standalone: true
})

export class HomeComponent {

}
