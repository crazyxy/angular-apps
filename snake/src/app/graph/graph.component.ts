/**
 * @file             : graph.component.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 23/11/2018
 * Last Modified Date: 23/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnInit {
  row: number = 100;
  col: number = 100;

  Arr = Array;

  constructor() { }

  ngOnInit() {
  }

}
