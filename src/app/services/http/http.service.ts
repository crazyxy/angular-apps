import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ConfigService, Config } from '../config/config.service';
import { Observable, Observer } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  get(api: string): Observable<any>{
    return Observable.create((observer: Observer<any>) => {
      this.configService.getConfig().subscribe(
        (config: Config) => {
          this.http.get(`${config.hostUrl}/${api}`).pipe(retry(3)).subscribe(
            data => {
              observer.next(data);
              observer.complete();
            },
            error => observer.error(error)
          );
        },
        error => observer.error(error)
      )
    });
  }
}
