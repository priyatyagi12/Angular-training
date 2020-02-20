import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoggedinService } from './shared/logged-in.service';



@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private loggedInService: LoggedinService, 
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    let url: string = state.url;
    return this.loggedInService.isLoggedIn$;
        
  }

  checkLogin(url: string): Observable<boolean> {
     if (this.loggedInService.isLoggedIn) {
      return of(true);
    } else {
      this.loggedInService.redirectUrl = url;
      this.router.navigate(['/login']);

    } 
    return this.loggedInService.isLoggedIn$;
  }
}
