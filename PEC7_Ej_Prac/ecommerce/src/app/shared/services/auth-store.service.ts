import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStore {
  private isAuthenticated: boolean = false;
  private authToken: string | null = null;

  constructor() {
    if (typeof localStorage !== 'undefined') {
      this.isAuthenticated = !!localStorage.getItem('authToken');
      this.authToken = localStorage.getItem('authToken');
    } else {
      console.warn('localStorage is not available. Initializing with default values.');
      this.isAuthenticated = false;
      this.authToken = null;
    }
  }

  setAuthToken(token: string): void {
    this.isAuthenticated = true;
    this.authToken = token;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  getAuthToken(): string | null {
    return this.authToken;
  }

  clearAuthToken(): void {
    this.isAuthenticated = false;
    this.authToken = null;
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
