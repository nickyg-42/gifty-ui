import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent {
  constructor() {}

  menuOpen: boolean = false;

  isCurrentPage(page: string): boolean {
    const href: string = window.location.href;

    return href.includes(page);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
