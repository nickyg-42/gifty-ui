import { Component } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User, UserRole } from 'src/app/models/User';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent {
  constructor() {}

  isCurrentPage(page: string): boolean {
    const href: string = window.location.href;

    return href.includes(page);
  }
}
