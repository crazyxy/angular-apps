import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Config, ConfigService } from '../config/config.service';
import { Observable, Observer } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private configService: ConfigService) { 
  }

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

  post(api: string, body: any): Observable<any>{
    return Observable.create((observer: Observer<any>) => {
      let headers = new HttpHeaders;
      this.configService.getConfig().subscribe(
        (config: Config) => {
          this.http.post(`${config.hostUrl}/${api}`, body, {headers: headers}).subscribe(
            data => {
              observer.next(data);
              observer.complete();
            },
            error => observer.error(error)
          )
        },
        error => observer.error(error)
      )
    });
  }

  uploadFile(endpoint: string, file: File): Observable<any>{
    return Observable.create((observer: Observer<any>) => {

      let headers = new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'x-ms-blob-type': 'BlockBlob'
      });

      this.http.put(endpoint, file, {headers: headers}).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        error => observer.error(error)
      )
    });
  }
}
