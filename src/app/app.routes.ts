import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./pages/home/home.component').then(c => c.HomeComponent);
    },
    data: { title: 'Maqsadimiz, ilm orqali insonlar hayotini o\'zgartirish!' }
  },
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blogs/blogs.routes').then(r => r.blogsRoutes)
  },
  {
    path: 'media',
    loadComponent: () => {
      return import('./pages/media/media.component').then(c => c.MediaComponent);
    },
    data: { title: 'Biz bilan yaqindan tanishing' }
  }, {
    path: 'vacancies',
    loadComponent: () => {
      return import('./pages/vacancies/vacancies.component').then(c => c.VacanciesComponent);
    },
    data: { title: 'Vakansiyalar' }
  }
];
