import { Component, signal } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';
import menu from '@shared/constants/menu';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'site-header',
  imports: [
    ImageComponent,
    RouterLink,
    CustomButtonComponent,
    IconComponent,
    IconComponent,
    MobileMenuComponent
  ],
  templateUrl: './header.component.html',
  standalone: true
})

export class HeaderComponent {
  menu = menu;
  isMenuOpen = false;

  openMenu() {
    this.isMenuOpen = true;
  }
}
