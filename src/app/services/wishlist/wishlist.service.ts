import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/config';
import { Item } from 'src/app/models/Item';
import { Wishlist } from 'src/app/models/Wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  constructor(private http: HttpClient, private router: Router) { }

  private apiUrl = API_BASE_URL + 'Wishlist';

  createWishlist(wishlist: Wishlist): Observable<any> {
    return this.http.post(this.apiUrl, wishlist);
  }
  
  getWishlistById(wishlistId: string): Observable<Wishlist> {
    const url = `${this.apiUrl}/${wishlistId}`;
    return this.http.get<Wishlist>(url);
  }

  getWishlistsByOwner(email: string): Observable<Wishlist[]> {
    const url = `${this.apiUrl}/email/${email}`;
    return this.http.get<Wishlist[]>(url);
  }

  getAllWishlists(): Observable<Wishlist[]> {
    return this.http.get<Wishlist[]>(this.apiUrl);
  }

  updateWishlist(wishlistId: string, updatedWishlist: Wishlist): Observable<any> {
    const url = `${this.apiUrl}/${wishlistId}`;
    return this.http.put(url, updatedWishlist);
  }

  addItem(wishlistId: string, item: Item): Observable<any> {
    const url = `${this.apiUrl}/item/${wishlistId}`;
    return this.http.put(url, item);
  }

  deleteWishlist(wishlistId: string): Observable<any> {
    const url = `${this.apiUrl}/${wishlistId}`;
    return this.http.delete(url);
  }

  deleteItem(wishlistId: string, itemId: number): Observable<any> {
    const url = `${this.apiUrl}/item/${wishlistId}/${itemId}`;
    return this.http.delete(url);
  }
}
