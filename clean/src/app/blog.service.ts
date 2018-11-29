/**
 * @file             : blog.service.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 23/11/2018
 * Last Modified Date: 23/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import * as Showdown from 'showdown';

import { Blog } from './models/blog';
import { Config, ConfigService } from './config.service';

class BlogModel{
  id: number;
  title: string;
  published: boolean;
  publishedDate: string;
  content: string;
  likeCount: number;
  viewCount: number;
};

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  hostUrl: string;
  error: any;

  blogs: Blog[] = [];
  
  constructor(
    private http : HttpClient,
    private configService : ConfigService) { 

    configService.getConfig().subscribe(
      (data: Config) => {
        this.hostUrl = data.hostUrl;
        var converter = new Showdown.Converter;
        
        this.http.get(`${this.hostUrl}/api/blogs`).subscribe(
          (data: BlogModel[]) => {
            data.forEach(blog => {
              this.blogs.push({
                id: 1,
                title: blog.title,
                published: blog.published,
                publishedDate: blog.publishedDate,
                content: converter.makeHtml(blog.content),
                likeCount: blog.likeCount,
                viewCount: blog.viewCount
              })

              console.log(this.blogs[0].content);
            })
          },
          error => console.error(error)
        )
      },
      error =>{
        this.error = error
        console.error(error);
      }
    );
  }

  get(): Observable<Blog[]>{
    return of(this.blogs);
  }
}
