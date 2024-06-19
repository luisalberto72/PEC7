import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStore } from '../services/auth-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authStore: AuthStore, private router: Router) {}

  canActivate(): boolean {
    if (this.authStore.isAuthenticatedUser()) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
