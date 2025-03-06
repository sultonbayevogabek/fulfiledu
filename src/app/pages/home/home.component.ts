import { Component } from '@angular/core';
import { IntroComponent } from '../../core/intro/intro.component';
import { HistoryComponent } from './history/history.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'app-home',
  imports: [
    IntroComponent,
    HistoryComponent,
    ProjectsComponent,
    TeamComponent,
    LoaderComponent
  ],
  templateUrl: './home.component.html',
  standalone: true
})

export class HomeComponent {

}
