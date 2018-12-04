/**
 * @file             : blog-list.component.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 23/11/2018
 * Last Modified Date: 23/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Component, OnInit } from '@angular/core';

import { BlogService } from '../../services/blog/blog.service';

import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];
  
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getBlogs();
  }
  
  getBlogs() {
    this.blogService.get().subscribe(blogs => this.blogs = blogs);
  }
}
