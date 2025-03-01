import { Component, model } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import menu from '@shared/constants/menu';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';

@Component({
  selector: 'mobile-menu',
  imports: [
    ImageComponent,
    CustomButtonComponent
  ],
  templateUrl: './mobile-menu.component.html',
  standalone: true
})

export class MobileMenuComponent {
  menu = menu;
  isOpen = model<boolean>(false);

  closeMenu() {
    this.isOpen.update(() => false);
  }
}
