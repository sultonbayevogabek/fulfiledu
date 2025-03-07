import { Component } from '@angular/core';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { NgTemplateOutlet } from '@angular/common';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { ImageComponent } from '@shared/components/image/image.component';

@Component({
  selector: 'meet-us',
  imports: [
    CustomButtonComponent,
    NgTemplateOutlet,
    SectionComponent,
    SectionHeadingComponent,
    ImageComponent
  ],
  templateUrl: './meet-us.component.html'
})

export class MeetUsComponent {
}
