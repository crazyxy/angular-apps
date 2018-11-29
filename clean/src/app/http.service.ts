import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Config, ConfigService } from './config.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  hostUrl: string;
  error: any;
  
  constructor(
    private http : HttpClient,
    private configService : ConfigService) { 
    configService.getConfig().subscribe(
      (data: Config) => this.hostUrl = data.hostUrl,
      error =>{
        this.error = error
        console.error(error);
      }
    );
  }
}
