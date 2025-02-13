import { Component } from '@angular/core';
import { ImageComponent } from '../../shared/components/image/image.component';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../shared/components/custom-button/custom-button.component';

@Component({
  selector: 'site-header',
  imports: [
    ImageComponent,
    RouterLink,
    CustomButtonComponent
  ],
  templateUrl: './header.component.html',
  host: {
    class: 'flex items-center justify-between py-2.5 800:py-4 1200:py-5'
  }
})
export class HeaderComponent {
  menu = [
    {
      text: 'Bosh sahifa',
      link: '/',
    },
    {
      text: 'Loyihalar',
      link: '/projects',
    },
    {
      text: 'Jamoa',
      link: '/team',
    },
    {
      text: 'Blog',
      link: '/blog',
    },
    {
      text: 'Mediya',
      link: '/media',
    },
    {
      text: 'Vakansiyalar',
      link: '/vacancies',
    }
  ]
}
