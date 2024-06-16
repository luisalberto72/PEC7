import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthStore } from './auth-store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authStore: AuthStore) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authStore.getAuthToken();

    if (authToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return next.handle(authReq);
    } else {
      return next.handle(req);
    }
  }
}
