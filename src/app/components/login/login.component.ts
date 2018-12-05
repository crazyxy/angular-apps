import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'src/app/services/adal/adal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private adalService: AdalService) { }

  ngOnInit() {
  }

  login(){
    this.adalService.login();
  }

  logout(){
    this.adalService.logout();
  }

  public get isLoggedIn(){
    return this.adalService.isAuthenticated;
  }
}
