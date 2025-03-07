import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'blog',
    loadComponent: () => {
      return import('./pages/blog-and-news/blog-and-news.component').then(c => c.BlogAndNewsComponent)
    }
  },
  {
    path: 'media',
    loadComponent: () => {
      return import('./pages/media/media.component').then(c => c.MediaComponent)
    }
  }
];
