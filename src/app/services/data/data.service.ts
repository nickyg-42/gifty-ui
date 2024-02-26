import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  private cachedData: Map<string, any> = new Map<string, any>();

  getData(key: string): any {
    return this.cachedData.get(key);
  }

  setData(key: string, data: any): void {
    this.cachedData.set(key, data);
  }
}
