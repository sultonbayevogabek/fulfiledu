import { Component } from '@angular/core';
import { ImageComponent } from '@shared/components/image/image.component';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { IconComponent } from '@shared/components/icon/icon.component';

@Component({
  selector: 'site-footer',
  imports: [
    ImageComponent,
    RouterLink,
    CustomButtonComponent,
    IconComponent,
    IconComponent,
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  host: {
    class: 'flex items-center justify-between py-2.5 800:py-4 1200:py-5 bg-[#00393B]'
  },
})

export class FooterComponent {
}
