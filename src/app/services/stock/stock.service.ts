import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/models/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpService) { }

  get(symbol: string): Observable<Stock>{
    return this.http.get(`stock/${symbol}`);
  }
}
