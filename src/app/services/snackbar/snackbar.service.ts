import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from 'src/app/components/error-snackbar/error-snackbar.component';
import { OkSnackbarComponent } from 'src/app/components/ok-snackbar/ok-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  showError(message: string): void {
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      data: `${message}`,
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  showOk(message: string): void {
    this.snackBar.openFromComponent(OkSnackbarComponent, {
      data: `${message}`,
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
