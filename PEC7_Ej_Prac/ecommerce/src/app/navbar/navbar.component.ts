import { Component } from '@angular/core';
import { AuthStore } from '../shared/services/auth-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authStore: AuthStore) {}
}
