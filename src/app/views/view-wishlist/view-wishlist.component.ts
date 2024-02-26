import { Component } from '@angular/core';
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

  ngOnInit(): void {
    this.currentWishlist = this.dataService.getCurrentWishlist();
  }
}
