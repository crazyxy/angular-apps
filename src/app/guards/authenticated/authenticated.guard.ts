import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdalService } from 'src/app/services/adal/adal.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private router: Router, private adalService: AdalService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'redirectUrl': next.url }
    };

    if(!this.adalService.userInfo){
      this.router.navigate(['login'], navigationExtras);
    }
    return true;
  }
}
