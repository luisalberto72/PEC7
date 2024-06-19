
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:3000/api/user'; 

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, { username, password })
      .pipe(
        tap(response => {
          // Guardar el token en localStorage
          localStorage.setItem('authToken', response.token);
        })
      );
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/register`, { username, password });
  }

}





