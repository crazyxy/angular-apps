/**
 * @file             : graph.component.ts
 * @author           : Yan Xue <xuey@microsoft.com>
 * Date              : 23/11/2018
 * Last Modified Date: 23/11/2018
 * Last Modified By  : Yan Xue <xuey@microsoft.com>
 */
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.less']
})
export class GraphComponent implements OnInit {
  snake: Set<number[]> = new Set([[0, 0]]);

  dirs: Array<number[]> = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  dir: number = 1;

  col: number = 200;
  row: number;

  rowArr: number[];
  colArr: number[];
  color: string[];

  timer: any;

  constructor() {
    this.row = Math.round(window.innerHeight / (window.innerWidth / this.col));
    this.rowArr = Array.from(new Array(this.row), (val, index) => index);
    this.colArr = Array.from(new Array(this.col), (val, index) => index);
    this.color = Array(this.col * this.row).fill('white');

    this.snake.forEach(b => { this.color[b[0] * this.col + b[1]] = 'black' });

    var food = this.generateFood();

    this.timer = setInterval(() => {
      var head, tail;

      let init = false;
      this.snake.forEach(body => {
        head = body.slice();
        if (!init) {
          tail = body.slice();
          init = true;
        }
      });

      head[0] += this.dirs[this.dir][0];
      head[1] += this.dirs[this.dir][1];

      this.snake.forEach(body => {
        if (body[0] == head[0] && body[1] == head[1]) {
          clearInterval(this.timer);
        }
      })

      if (head[0] < 0 || head[0] >= this.row || head[1] < 0 || head[1] >= this.col) {
        clearInterval(this.timer);
      }

      if (head[0] == food[0] && head[1] == food[1]) {
        this.color[head[0] * this.col + head[1]] = 'black';
        this.snake.add(food);

        food = this.generateFood();
      } else {
        this.color[tail[0] * this.col + tail[1]] = 'white';
        this.color[head[0] * this.col + head[1]] = 'black';

        this.snake.forEach(body => {
          if (body[0] == tail[0] && body[1] == tail[1]) {
            this.snake.delete(body);
          }
        });

        this.snake.add(head);
      }
    }, 1);
  }

  ngOnInit() {
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key == "ArrowUp") {
      if (this.dir != 2) {
        this.dir = 0;
      }
    } else if (event.key == "ArrowDown") {
      if (this.dir != 0) {
        this.dir = 2;
      }
    } else if (event.key == "ArrowLeft") {
      if (this.dir != 1) {
        this.dir = 3;
      }
    } else if (event.key == "ArrowRight") {
      if (this.dir != 3) {
        this.dir = 1;
      }
    }

    console.log(event.key + " " + this.dir);
  }

  generateFood(): number[] {
    var r = Math.floor(Math.random() * this.row);
    var c = Math.floor(Math.random() * this.col);
    while (this.snake.has([r, c])) {
      r = Math.floor(Math.random() * this.row);
      c = Math.floor(Math.random() * this.col);
    }

    this.color[r * this.col + c] = 'red';
    return [r, c];
  }
}
