import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpService) { }

  getCompany(symbol: string): Observable<any>{
    return this.http.get(`company/${symbol}`);
  }

  getPrice(symbol: string): Observable<any>{
    return this.http.get(`company/${symbol}/price`);
  }

  getNews(symbol: string): Observable<any>{
    return this.http.get(`company/${symbol}/news`);
  }

  getLogo(symbol: string): Observable<any>{
    return this.http.get(`company/${symbol}/logo`);
  }

  getHistory(symbol: string): Observable<any>{
    return this.http.get(`company/${symbol}/chart`);
  }
}
