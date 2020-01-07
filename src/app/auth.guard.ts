import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // authService: any;

  constructor(private router: Router, private authService: AuthService) { }
  canActivate(): boolean {
    // if (this.authService.loggedIn()) {
    //   return true;
    // }
    // else {
      this.router.navigate(['/login']);
      return false;
    
  }

  

}

