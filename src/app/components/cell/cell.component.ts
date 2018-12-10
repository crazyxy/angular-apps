import { Component, OnInit, Input } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock/stock.service';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  stock: Stock;

  @Input() symbol: string;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.stockService.get(this.symbol).subscribe(data =>{
      this.stock = data;
    });
  }
}
