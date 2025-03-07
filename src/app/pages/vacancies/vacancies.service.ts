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

  async getVacancy(index: number) {
    if (!this.vacancies().length) {
      await this.getVacanciesList();
    }

    if (index > this.vacancies().length - 1) {
      return this.vacancies()[0];
    }

    return this.vacancies()[index];
  }

  getAnotherVacancies(index: number) {
    const result: IVacancy[] = [];

    this.vacancies().forEach((vacancy, i) => {
      if (index !== i && result.length < 3) {
        result.push(vacancy)
      }
    })

    return result;
  }
}
