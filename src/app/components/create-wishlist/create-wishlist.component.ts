import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/models/Item';
import { User } from 'src/app/models/User';
import { Wishlist } from 'src/app/models/Wishlist';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-create-wishlist',
  templateUrl: './create-wishlist.component.html',
  styleUrls: ['./create-wishlist.component.scss']
})
export class CreateWishlistComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User, 
    public dialogRef: MatDialogRef<CreateWishlistComponent>
  ) {}
  
  listName: string = "";
  listDescription: string = "";
  wishlist: Wishlist = new Wishlist();

  createWishlist(): void {
    this.wishlist.listName = this.listName;
    this.wishlist.listDescription = this.listDescription;
    this.wishlist.listOwner = this.data;

    this.dialogRef.close(this.wishlist);
  }
}
