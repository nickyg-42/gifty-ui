import { Component } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { Wishlist } from 'src/app/models/Wishlist';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.scss']
})
export class ViewWishlistComponent {
  constructor(private dataService: DataService) {}

  currentWishlist: Wishlist = new Wishlist();
  isLoading: boolean = false;

  ngOnInit(): void {
    this.currentWishlist = this.dataService.getData("currentWishlist");
  }

  addItem(): void {

  }

  viewItem(item: Item): void {

  }

  deleteItem(item: Item): void {

  }
}
