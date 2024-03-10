import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// List all possible keys here:
// currentUser
// currentWishlist
// currentUserWishlists
export class DataService {
  constructor() { }

  private cachedData: Map<string, any> = new Map<string, any>();

  getData(key: string): any {
    return this.cachedData.get(key);
  }

  setData(key: string, data: any): void {
    this.cachedData.set(key, data);
  }

  deepCopy<T>(obj: T): T {
    if (typeof obj !== 'object' || obj === null) {
        // If obj is not an object, or if it's null, return it as is
        return obj;
    }

    if (Array.isArray(obj)) {
        // If obj is an array, create a new array and deep copy its elements
        return obj.map((item) => this.deepCopy(item)) as any;
    }

    // If obj is an object, create a new object and deep copy its properties
    const copiedObj: any = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copiedObj[key] = this.deepCopy(obj[key]);
        }
    }

    return copiedObj as T;
}
}
