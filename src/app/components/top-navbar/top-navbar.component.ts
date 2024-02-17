import { Component } from '@angular/core';

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
