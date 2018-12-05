/**
 * @file             : blog.service.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 23/11/2018
 * Last Modified Date: 23/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import * as Showdown from 'showdown';

import { Blog } from '../../models/blog';
import { HttpService } from '../http/http.service';

class BlogModel {
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
  constructor(private httpService: HttpService) {
  }

  get(): Observable<Blog[]> {
    return this.httpService.get("api/blogs").pipe(map(data => data.map(b => this.toBlog(b))));
  }

  search(query: string): Observable<Blog[]> {
    return this.httpService.get(`api/blogs?titleContains=${query}`).pipe(map(data=> data.map(b => this.toBlog(b))));
  }

  startUpload(title, fileName): Observable<string> {
    return this.httpService.post("api/blogs/startupload", {Title: title, FileName: fileName});
  }

  completeUpload(uploadUrl: string, file: File): Observable<any>{
    return this.httpService.uploadFile(uploadUrl, file);
  }

  toBlog(blog: BlogModel): Blog {
    let converter = new Showdown.Converter;
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return {
      id: blog.id,
      title: blog.title,
      published: blog.published,
      publishedDate: new Date(blog.publishedDate).toLocaleDateString("en-US", options),
      content: converter.makeHtml(blog.content),
      likeCount: blog.likeCount,
      viewCount: blog.viewCount
    };
  }
}
