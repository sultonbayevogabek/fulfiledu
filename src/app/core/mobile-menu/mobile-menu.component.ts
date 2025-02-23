import { Component } from '@angular/core';
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
  host: {
    class: 'fixed inset-0 h-screen bg-[#0000004d]'
  }
})

export class MobileMenuComponent {
  menu = menu;
}
