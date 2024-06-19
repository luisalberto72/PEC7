
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthStore } from './shared/services/auth-store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'TPV Vinoteca!';

  constructor(private authStore: AuthStore, private router: Router) {}

  ngOnInit(): void {
    // Verificar si el usuario está autenticado
    if (!this.authStore.isAuthenticatedUser()) {
      // Redireccionar al login si no está autenticado
      this.authStore.logout(); // Limpiar cualquier token no válido
    }
  }
}


