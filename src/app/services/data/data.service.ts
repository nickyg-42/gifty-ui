import { Injectable } from '@angular/core';
import { Wishlist } from 'src/app/models/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private currentWishlist?: Wishlist;
  
  setCurrentWishlist(data: Wishlist): void {
    this.currentWishlist = data;
  }

  getCurrentWishlist(): any {
    return this.currentWishlist;
  }
}
