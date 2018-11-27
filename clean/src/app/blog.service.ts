/**
 * @file             : blog.service.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 23/11/2018
 * Last Modified Date: 23/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Blog } from './models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [];

  constructor() { 
    // fake blog data
    this.blogs = [
      {id: 1, title: "first blog", published: true, publishedDate: "2018/11/22", content: "angular", like: 1, view: 2},
      {id: 2, title: "second blog", published: true, publishedDate: "2018/11/22", content: "another angular", like: 1, view: 2}
    ];
  }

  getBlogs(): Observable<Blog[]>{
    return of(this.blogs);
  }
}
