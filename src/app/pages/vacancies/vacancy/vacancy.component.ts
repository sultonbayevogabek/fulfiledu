import { Component, inject, OnInit, signal } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { Location, NgTemplateOutlet } from '@angular/common';
import { IVacancy } from '../vacancy.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VacanciesService } from '../vacancies.service';
import { ImageComponent } from '@shared/components/image/image.component';
import { VacancyCardComponent } from '../vacancy-card/vacancy-card.component';
import { LoaderComponent } from '@shared/components/loader/loader.component';

@Component({
  selector: 'vacancy',
  imports: [
    SectionComponent,
    IconComponent,
    NgTemplateOutlet,
    RouterLink,
    ImageComponent,
    VacancyCardComponent,
    LoaderComponent
  ],
  templateUrl: './vacancy.component.html',
  host: {
    class: 'flex flex-col flex-grow'
  }
})

export class VacancyComponent implements OnInit {
  vacancy = signal<IVacancy>(null);
  anotherVacancies = signal<IVacancy[]>([]);

  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);
  private vacanciesService = inject(VacanciesService);

  async ngOnInit() {
    this.activatedRoute.params.subscribe(params => {

    })
  }

  back() {
    this.location.back();
  }

  async getVacancy() {
    const snapshot = this.activatedRoute.snapshot;
    const params = snapshot.params;
    let vacancyIndex = 0;
    if (params && params['vacancyId']) {
      vacancyIndex = +params['vacancyId'].split('-').reverse()[0] || 0;
    }
    const vacancy = await this.vacanciesService.getVacancy(vacancyIndex);
    this.vacancy.set({
      ...vacancy,
      offersList: vacancy.offers.split('||'),
      requirementsList: vacancy.requirements.split('||'),
    });
    this.getAnotherVacancies(vacancyIndex);
  }

  getAnotherVacancies(index: number) {
    const anotherVacancies = this.vacanciesService.getAnotherVacancies(index);
    this.anotherVacancies.set(anotherVacancies);
  }
}
