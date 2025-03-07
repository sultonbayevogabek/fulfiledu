import { Component, inject, OnInit, signal } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { NgTemplateOutlet } from '@angular/common';
import { ImageComponent } from '@shared/components/image/image.component';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';
import { IntroComponent } from '../../core/intro/intro.component';
import { SheetsService } from '@shared/services/sheets.service';

@Component({
  selector: 'media',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    CustomButtonComponent,
    NgTemplateOutlet,
    ImageComponent,
    SkeletonComponent,
    IntroComponent
  ],
  templateUrl: './media.component.html',
  standalone: true
})

export class MediaComponent implements OnInit {
  images = signal<{ image: string }[]>([]);

  private sheetsService = inject(SheetsService);


  async ngOnInit() {
    await this.getMediaImages();
  }

  async getMediaImages() {
    const response = await this.sheetsService.getData<{ image: string }>('media');
    this.images.set(response);
  }
}
