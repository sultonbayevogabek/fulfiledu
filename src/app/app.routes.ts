import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    data: { title: 'Maqsadimiz, ilm orqali insonlar hayotini o\'zgartirish!' }
  },
  {
    path: 'blog',
    loadComponent: () => {
      return import('./pages/blog-and-news/blog-and-news.component').then(c => c.BlogAndNewsComponent)
    },
    data: { title: 'Blog va yangiliklar' }
  },
  {
    path: 'media',
    loadComponent: () => {
      return import('./pages/media/media.component').then(c => c.MediaComponent)
    },
    data: { title: 'Biz bilan yaqindan tanishing' }
  }
];
