import { Component } from '@angular/core';
import { IntroComponent } from '../../core/intro/intro.component';
import { HistoryComponent } from './history/history.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { BlogAndNewsComponent } from '../blog-and-news/blog-and-news.component';
import { MeetUsComponent } from './meet-us/meet-us.component';

@Component({
  selector: 'app-home',
  imports: [
    IntroComponent,
    HistoryComponent,
    ProjectsComponent,
    TeamComponent,
    BlogAndNewsComponent,
    MeetUsComponent
  ],
  templateUrl: './home.component.html',
  standalone: true
})

export class HomeComponent {

}
