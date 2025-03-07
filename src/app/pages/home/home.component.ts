import { Component } from '@angular/core';
import { HistoryComponent } from './history/history.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeamComponent } from './team/team.component';
import { BlogAndNewsComponent } from '../blog-and-news/blog-and-news.component';
import { MeetUsComponent } from './meet-us/meet-us.component';
import { VacanciesComponent } from '../vacancies/vacancies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@Component({
  selector: 'app-home',
  imports: [
    HistoryComponent,
    ProjectsComponent,
    TeamComponent,
    BlogAndNewsComponent,
    MeetUsComponent,
    VacanciesComponent,
    ContactUsComponent
  ],
  templateUrl: './home.component.html',
  standalone: true
})

export class HomeComponent {
}
