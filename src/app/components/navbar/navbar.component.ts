import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'src/app/services/adal/adal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  @Input() searchValue: string;
  user: string;

  constructor(private router: Router, private adalService: AdalService) { }

  ngOnInit() {
    if(this.adalService.isAuthenticated){
      this.user = this.adalService.userInfo.profile.name;
    }else{
      this.user = "Guest";
    }
  }

  search(){
    this.router.navigate(['/blogs', this.searchValue]);
    this.searchValue = '';
  }
}
