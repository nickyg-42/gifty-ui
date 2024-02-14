import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ok-snackbar',
  templateUrl: './ok-snackbar.component.html',
  styleUrls: ['./ok-snackbar.component.css']
})
export class OkSnackbarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string, private snackBar: MatSnackBar) {}

  closeSnackbar() {
    this.snackBar.dismiss();
  }
}
