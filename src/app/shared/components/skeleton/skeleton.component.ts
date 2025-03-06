import { Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { ImageComponent } from '@shared/components/image/image.component';

@Component({
  selector: 'skeleton',
  imports: [
    NgTemplateOutlet,
  ],
  templateUrl: './skeleton.component.html',
})

export class SkeletonComponent {
  count = input<number>(4);
  type = input.required<'members' | 'blog' | 'vacancies'>();
  readonly Array = Array;
}
