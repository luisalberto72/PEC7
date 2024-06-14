import { Component } from '@angular/core';
import { AuthStoreService } from '../services/auth-store.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public authStore: AuthStoreService) {}
}
