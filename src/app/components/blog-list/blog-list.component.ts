/**
 * @file             : blog-list.component.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 23/11/2018
 * Last Modified Date: 23/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../../services/blog/blog.service';

import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];
  
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var search = params.get('search');
      if(!search){
        this.blogService.get().subscribe(blogs => this.blogs = blogs);
      }else{
        this.blogService.search(search).subscribe(blogs => this.blogs = blogs);
      }
    });
  }
}
