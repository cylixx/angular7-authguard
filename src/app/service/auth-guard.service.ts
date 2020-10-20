import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthorizeService } from './hardcoded-authorize.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild { // implementamos CanActivate para resguardar las paginas

  constructor(
    private hardcodedAuthorizeService: HardcodedAuthorizeService,
    private router: Router
  ) { }

  // accede a las paginas solo cuando el usuario este logueado
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthorizeService.isUserLoggedIn())  
      return true;
    
    alert("Not logged in!");
    this.router.navigate(['login']);
    return false;
  }

  // protege el acceso a las paginas hijo
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthorizeService.isUserLoggedIn())  
      return true;
    
    alert("Not allowed to view the child!");
    this.router.navigate(['login']);
    return false;
  }
}
