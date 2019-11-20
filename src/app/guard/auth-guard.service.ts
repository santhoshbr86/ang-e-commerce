import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router) { }
  canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'));
    if(loggedIn) {
      return true;
    } 
    //this.router.navigate(['/'],{queryParams: {returnUrl: state.url}})
    return false;
  }
}
