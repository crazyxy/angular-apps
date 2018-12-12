import { Component, OnInit, Input } from '@angular/core';
import { StockService } from 'src/app/services/stock/stock.service';
import { Observable } from 'rxjs';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  company: Observable<any>;
  price: Observable<number>;
  news: Observable<any[]>;
  logo: Observable<any>;
  chartOption: EChartOption;
  data: any;

  upColor = '#ec0000';
  upBorderColor = '#8A0000';
  downColor = '#00da3c';
  downBorderColor = '#008F28';

  @Input() symbol: string;

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.company = this.stockService.getCompany(this.symbol);
    this.price = this.stockService.getPrice(this.symbol);
    this.news = this.stockService.getNews(this.symbol);
    this.logo = this.stockService.getLogo(this.symbol);
    this.stockService.getHistory(this.symbol).subscribe(
      (data) => {
        this.data = this.splitData(data);

        this.chartOption = {
          title: {
            text: this.symbol
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            }
          },
          legend: {
            data: ['K', 'MA5', 'MA10', 'MA20', 'MA30']
          },
          grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
          },
          xAxis: {
            type: 'category',
            data: this.data.categoryData,
            scale: true,
            boundaryGap: false,
            axisLine: { onZero: false },
            splitLine: { show: false },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
          },
          yAxis: {
            scale: true,
            splitArea: {
              show: true
            }
          },
          dataZoom: [
            {
              type: 'inside',
              start: 50,
              end: 100
            },
            {
              show: true,
              type: 'slider',
              start: 50,
              end: 100
            }
          ],
          series: [
            {
              name: 'K',
              type: 'candlestick',
              data: this.data.values,
              itemStyle: {
                normal: {
                  color: this.upColor,
                  color0: this.downColor,
                  borderColor: this.upBorderColor,
                  borderColor0: this.downBorderColor
                }
              },
              markPoint: {
                label: {
                  normal: {
                    formatter: function (param) {
                      return param != null ? Math.round(param.value) : '';
                    }
                  }
                },
                data: [
                  {
                    name: 'highest value',
                    type: 'max',
                    valueDim: 'highest'
                  },
                  {
                    name: 'lowest value',
                    type: 'min',
                    valueDim: 'lowest'
                  },
                  {
                    name: 'average value on close',
                    type: 'average',
                    valueDim: 'close'
                  }
                ],
                tooltip: {
                  formatter: function (param) {
                    return param.name + '<br>' + (param.data.coord || '');
                  }
                }
              },
              markLine: {
                symbol: ['none', 'none'],
                data: [
                  [
                    {
                      name: 'from lowest to highest',
                      type: 'min',
                      valueDim: 'lowest',
                      symbol: 'circle',
                      symbolSize: 10,
                      label: {
                        normal: { show: false },
                        emphasis: { show: false }
                      }
                    },
                    {
                      type: 'max',
                      valueDim: 'highest',
                      symbol: 'circle',
                      symbolSize: 10,
                      label: {
                        normal: { show: false },
                        emphasis: { show: false }
                      }
                    }
                  ],
                  {
                    name: 'min line on close',
                    type: 'min',
                    valueDim: 'close'
                  },
                  {
                    name: 'max line on close',
                    type: 'max',
                    valueDim: 'close'
                  }
                ]
              }
            },
            {
              name: 'MA5',
              type: 'line',
              data: this.calculateMA(5),
              smooth: true,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },
            {
              name: 'MA10',
              type: 'line',
              data: this.calculateMA(10),
              smooth: true,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },
            {
              name: 'MA20',
              type: 'line',
              data: this.calculateMA(20),
              smooth: true,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },
            {
              name: 'MA30',
              type: 'line',
              data: this.calculateMA(30),
              smooth: true,
              lineStyle: {
                normal: { opacity: 0.5 }
              }
            },

          ]
        }
      }
    );
  }

  splitData(rawData: Array<any>) {
    var categoryData = [];
    var values = []
    for (var i = 0; i < rawData.length; i++) {
      categoryData.push(rawData[i].date);
      values.push([rawData[i].open, rawData[i].close, rawData[i].low, rawData[i].high])
    }
    return {
      categoryData: categoryData,
      values: values
    };
  }

  calculateMA(dayCount) {
    var result = [];
    for (var i = 0, len = this.data.values.length; i < len; i++) {
      if (i < dayCount) {
        result.push('-');
        continue;
      }
      var sum = 0;
      for (var j = 0; j < dayCount; j++) {
        sum += this.data.values[i - j][1];
      }
      result.push(sum / dayCount);
    }
    return result;
  }
}
