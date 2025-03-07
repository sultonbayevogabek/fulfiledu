import { Component, computed, inject, input, OnInit } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { NgTemplateOutlet } from '@angular/common';
import { ImageComponent } from '@shared/components/image/image.component';
import { BlogsService } from './blogs.service';
import { SkeletonComponent } from '@shared/components/skeleton/skeleton.component';

@Component({
  selector: 'blog-and-news',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    CustomButtonComponent,
    NgTemplateOutlet,
    ImageComponent,
    SkeletonComponent,
  ],
  templateUrl: './blog-and-news.component.html',
  standalone: true
})

export class BlogAndNewsComponent implements OnInit {
  page = input('blog');
  blogs = computed(() => {
    if (this.page() === 'blog') {
      return this.blogsService.blogs();
    }
    return this.blogsService.blogs().slice(0, 4);
  });

  private blogsService = inject(BlogsService);

  async ngOnInit() {
    await this.getBlogsList();
  }

  async getBlogsList() {
    await this.blogsService.getBlogsList();
  }
}
