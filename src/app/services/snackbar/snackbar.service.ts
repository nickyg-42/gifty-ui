import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from 'src/app/components/error-snackbar/error-snackbar.component';
import { OkSnackbarComponent } from 'src/app/components/ok-snackbar/ok-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) { }

  showErrorObject(error: any): void {
    const message = typeof error.error === 'string' ? error.error : 'A server error occured. Refresh or try again later.';
    
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      data: `${message}`,
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  showErrorMessage(error: string): void {
    this.snackBar.openFromComponent(ErrorSnackbarComponent, {
      data: `${error}`,
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  showOk(message: string): void {
    this.snackBar.openFromComponent(OkSnackbarComponent, {
      data: `${message}`,
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
