import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { SectionComponent } from '@shared/components/section/section.component';
import { SectionHeadingComponent } from '@shared/components/section-heading/section-heading.component';
import { CustomButtonComponent } from '@shared/components/custom-button/custom-button.component';
import { NgTemplateOutlet } from '@angular/common';
import { ImageComponent } from '@shared/components/image/image.component';
import { MemberFilterPipe } from '../home/team/member-filter.pipe';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'blog-and-news',
  imports: [
    SectionComponent,
    SectionHeadingComponent,
    CustomButtonComponent,
    NgTemplateOutlet,
    ImageComponent,
    MemberFilterPipe
  ],
  templateUrl: './blog-and-news.component.html',
  standalone: true
})

export class BlogAndNewsComponent implements OnInit {
  page = input('blog');
  blogs = computed(() => this.blogsService.blogs());

  private blogsService = inject(BlogsService);

  async ngOnInit() {
    await this.getBlogsList();
  }

  async getBlogsList() {

  }
}
