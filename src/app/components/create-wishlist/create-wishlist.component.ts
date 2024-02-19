import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/models/User';
import { Wishlist } from 'src/app/models/Wishlist';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-create-wishlist',
  templateUrl: './create-wishlist.component.html',
  styleUrls: ['./create-wishlist.component.scss']
})
export class CreateWishlistComponent {
  constructor(private wishlistService: WishlistService, private snackbarService: SnackbarService,  @Inject(MAT_DIALOG_DATA) public data: User, public dialogRef: MatDialogRef<CreateWishlistComponent>) {}

  isLoading: boolean = false;
  listName: string = "";
  listDescription: string = "";
  wishlist: Wishlist = new Wishlist();

  createWishlist() {
    this.isLoading = true;

    this.wishlist.listName = this.listName;
    this.wishlist.listDescription = this.listDescription;
    this.wishlist.listOwner = this.data;

    this.wishlistService.createWishlist(this.wishlist).subscribe({
      next: () => {
        this.isLoading = false;
        this.dialogRef.close("ok");
        this.snackbarService.showOk("List created successfully");
      },
      error: (error) => {
        this.snackbarService.showErrorObject(error);
        this.isLoading = false;
      }
    });
  }
}
