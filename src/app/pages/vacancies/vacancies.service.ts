import { inject, Injectable, signal } from '@angular/core';
import { SheetsService } from '@shared/services/sheets.service';
import { IVacancy } from './vacancy.interface';

@Injectable({
  providedIn: 'root',
})

export class VacanciesService {
  vacancies = signal<IVacancy[]>([])

  private sheetsService = inject(SheetsService);

  async getVacanciesList() {
    const vacancies = await this.sheetsService.getData<IVacancy>('vacancies');
    this.vacancies.set(vacancies);
  }
}
