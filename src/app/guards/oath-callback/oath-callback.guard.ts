import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdalService } from 'src/app/services/adal/adal.service';

@Injectable({
  providedIn: 'root'
})
export class OathCallbackGuard implements CanActivate {
  constructor(private router: Router, private adalService: AdalService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.adalService.handleCallback();

    if(this.adalService.userInfo){
      localStorage.setItem("token", this.adalService.accessToken);
      var returnUrl = next.queryParams['returnUrl'];
      if(!returnUrl){
        this.router.navigate(['home']);
      }else{
        this.router.navigate(['returnUrl'], {queryParams: next.queryParams});
      }
    }else{
      this.router.navigate(['login']);
    }

    return false;
  }
}
