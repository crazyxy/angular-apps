import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  @Input() searchValue: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(){
    this.router.navigate(['/blogs', this.searchValue]);
    this.searchValue = '';
  }
}
