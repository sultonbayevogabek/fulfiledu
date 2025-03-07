import { Component } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { NgTemplateOutlet } from '@angular/common';
import { IconComponent } from '@shared/components/icon/icon.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';

@Component({
  selector: 'contact-us',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    NgTemplateOutlet,
    IconComponent,
    CustomButtonComponent
  ],
  templateUrl: './contact-us.component.html'
})

export class ContactUsComponent {

}
