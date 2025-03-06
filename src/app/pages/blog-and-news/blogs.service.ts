import { inject, Injectable, signal } from '@angular/core';
import { SheetsService } from '@shared/services/sheets.service';
import { IBlog } from './blog.interface';

@Injectable({
  providedIn: 'root',
})

export class BlogsService {
  blogs = signal<IBlog[]>([])

  private sheetsService = inject(SheetsService);

  async getBlogsList() {
    const blogs = await this.sheetsService.getData<IBlog>('blog');
    this.blogs.set(blogs);
  }
}
