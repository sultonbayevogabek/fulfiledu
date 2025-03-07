import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { NgTemplateOutlet } from '@angular/common';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { SheetsService } from '@shared/services/sheets.service';
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

export class MeetUsComponent implements OnInit {
  images = signal<{ image: string }[]>([]);
  private sheetsService = inject(SheetsService);

  async ngOnInit() {
    await this.getGalleryImages();
  }

  async getGalleryImages() {
    const response = await this.sheetsService.getData<{ image: string }>('gallery');
    this.images.set(response.slice(0, 6));
    console.log(this.images());
  }
}
