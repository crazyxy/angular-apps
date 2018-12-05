import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdalService } from 'src/app/services/adal/adal.service';

@Component({
  selector: 'app-oath-callback',
  templateUrl: './oath-callback.component.html',
  styleUrls: ['./oath-callback.component.less']
})
export class OathCallbackComponent implements OnInit {

  constructor(private router: Router, private adalService: AdalService) { }

  ngOnInit() {
    if(!this.adalService.userInfo){
      this.router.navigate(['login']);
    }else{
      this.router.navigate(['home']);
    }
  }
}
