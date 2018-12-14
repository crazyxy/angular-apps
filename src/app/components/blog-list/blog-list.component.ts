/**
 * @file             : blog-list.component.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 23/11/2018
 * Last Modified Date: 23/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BlogService } from '../../services/blog/blog.service';

import { Blog } from '../../models/blog';
import { AdalService } from 'src/app/services/adal/adal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.less']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];
  likes: Map<string, number> = new Map();

  constructor(private route: ActivatedRoute, private router: Router, private blogService: BlogService, private adalService: AdalService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var search = params.get('search');
      if(!search){
        this.blogService.get().subscribe(data =>{
          this.blogs = data;
          this.blogs.forEach(b => this.likes.set(b.id, b.likeCount));
        });
      }else{
        this.blogService.search(search).subscribe(data =>{
          this.blogs = data
          this.blogs.forEach(b => this.likes.set(b.id, b.likeCount));
        });
      }
    });
  }

  like(id: string){
    if(this.adalService.isAuthenticated){
      this.blogService.like(id, this.adalService.userInfo.profile.aud).subscribe(data => this.likes.set(id, data));
    }else{
      this.router.navigate(['login']);
    }
  }
}
