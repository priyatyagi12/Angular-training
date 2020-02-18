import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot,
     RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';



@Injectable()
export class AuthGuard implements CanActivate  {
    constructor( private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        debugger;
        const url: string = state.url;
        // const isLoggedIn:boolean=this.checkLogin(url);
        const isAuthorized:boolean=false;
        // if(isLoggedIn)
        // {
        //    // const isAuthorized = this.authService.isAuthorized(url);
        // }
    //   return isLoggedIn;       
    return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }


    
}
