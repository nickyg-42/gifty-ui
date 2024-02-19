import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateWishlistComponent } from 'src/app/components/create-wishlist/create-wishlist.component';
import { DeleteConfirmComponent } from 'src/app/components/delete-confirm/delete-confirm.component';
import { User } from 'src/app/models/User';
import { Wishlist } from 'src/app/models/Wishlist';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DataService } from 'src/app/services/data/data.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';
import { UserService } from 'src/app/services/user/user.service';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-my-lists',
  templateUrl: './my-lists.component.html',
  styleUrls: ['./my-lists.component.scss']
})
export class MyListsComponent {
  constructor(
    private userService: UserService, 
    private authService: AuthService, 
    private snackbarService: SnackbarService, 
    private wishlistService: WishlistService, 
    private dialog: MatDialog,
    private router: Router,
    private dataService: DataService
  ) {}

  isLoading: boolean = false;
  user: User = new User();
  wishlists: Wishlist[] = [];

  ngOnInit(): void {
    this.isLoading = true;

    this.userService.getUserByEmail(this.authService.getUserEmailFromJWT()).subscribe({
      next: (data: User) => {
        this.user = data;

        this.wishlistService.getWishlistsByOwner(this.user.email).subscribe({
          next: (data: Wishlist[]) => {
            this.isLoading = false;
            this.wishlists = data;
          },
          error: (error) => {
            this.isLoading = false;
            this.snackbarService.showErrorObject(error);
          }
        });
      },
      error: (error) => {
        this.isLoading = false;
        this.snackbarService.showErrorObject(error);
      }
    });
  }

  createList(): void {
    const dialogRef = this.dialog.open(CreateWishlistComponent, {
      width: '500px',
      height: '345px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === "ok") this.ngOnInit();
    });
  }

  viewList(wishlist: Wishlist): void {
    this.dataService.setCurrentWishlist(wishlist);
    this.router.navigate(['/my-lists', wishlist.id]);
  }

  deleteList(wishlist: Wishlist): void {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      width: '450px',
      height: '120px',
      data: wishlist.listName
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result === "ok") {
        this.wishlistService.deleteWishlist(wishlist.id!).subscribe({
          next: () => {
            this.snackbarService.showOk("Wishlist deleted successfully");
            this.ngOnInit();
          },
          error: (error) => {
            this.snackbarService.showErrorObject(error);
          }
        });
      }
    })
  }
}
