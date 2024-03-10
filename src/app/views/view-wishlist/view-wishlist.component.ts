import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateItemComponent } from 'src/app/components/create-item/create-item.component';
import { DeleteConfirmComponent } from 'src/app/components/delete-confirm/delete-confirm.component';
import { Item } from 'src/app/models/Item';
import { Wishlist } from 'src/app/models/Wishlist';
import { DataService } from 'src/app/services/data/data.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.scss']
})
export class ViewWishlistComponent {
  constructor(
    private dataService: DataService, 
    private dialog: MatDialog, 
    private wishlistService: WishlistService,
    private snackbarService: SnackbarService,
    private router: Router
  ) {}

  currentWishlist: Wishlist = new Wishlist();
  isLoading: boolean = false;

  ngOnInit(): void {
    if (this.dataService.getData("currentWishlist")) {
      this.currentWishlist = this.dataService.getData("currentWishlist")
    } else {
      this.router.navigate(['/my-lists']);
    }
  }

  addItem(): void {
    const dialogRef = this.dialog.open(CreateItemComponent, {
      width: '500px',
      height: '510px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result instanceof Item) {
        this.isLoading = true;

        this.wishlistService.addItem(this.currentWishlist.id!, result).subscribe({
           next: (updated: Wishlist) => {
            this.isLoading = false;

            this.snackbarService.showOk("Item added successfully");

            // cache data
            let currentWishlists: Wishlist[] = this.dataService.getData("currentUserWishlists");
            currentWishlists.splice(currentWishlists.indexOf(this.currentWishlist), 1, updated)
            this.dataService.setData("currentUserWishlists", currentWishlists);
            this.dataService.setData("currentWishlist", updated);

            this.ngOnInit();
           },
           error: (error) => {
            this.isLoading = false;
            this.snackbarService.showErrorObject(error);
           }
        });
      }
    });
  }

  viewItem(item: Item): void {

  }

  deleteItem(item: Item): void {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '450px',
      height: '120px',
      data: item.itemName
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === "ok") {
        this.isLoading = true;

        this.wishlistService.deleteItem(this.currentWishlist.id!, item.id!).subscribe({
          next: (updated: Wishlist) => {
            this.isLoading = false;
            this.snackbarService.showOk("Item deleted successfully");

            // cache data
            let currentWishlists: Wishlist[] = this.dataService.getData("currentUserWishlists");
            currentWishlists.splice(currentWishlists.indexOf(this.currentWishlist), 1, updated)
            this.dataService.setData("currentUserWishlists", currentWishlists);
            this.dataService.setData("currentWishlist", updated);

            this.ngOnInit();
          },
          error: (error) => {
            this.isLoading = false;
            this.snackbarService.showErrorObject(error);
          }
        });
      }
    })
  }
}
