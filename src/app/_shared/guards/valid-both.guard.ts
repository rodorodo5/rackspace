import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidBothGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate() : boolean {
    if (localStorage.getItem('finalArray') && localStorage.getItem('information')) {
      return true;
    } else {
      this.router.navigateByUrl('/checkout');
      return false;
    }
  }
  
  
}
