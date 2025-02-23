import { Component } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';
import menu from '@shared/constants/menu';

@Component({
  selector: 'site-header',
  imports: [
    ImageComponent,
    RouterLink,
    CustomButtonComponent,
    IconComponent,
    MobileMenuComponent
  ],
  templateUrl: './header.component.html',
  host: {
    class: 'flex items-center justify-between py-2.5 800:py-4 1200:py-5'
  }
})

export class HeaderComponent {
  menu = menu;
}
