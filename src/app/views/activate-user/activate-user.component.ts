import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss']
})
export class ActivateUserComponent {
  constructor(private authService: AuthService, private snackbarService: SnackbarService, private router: Router) {}

  isLoading: boolean = false;
  activationCode: string = '';
  email: string = '';

  activate(): void {
    this.authService.activate(this.email, this.activationCode).subscribe({
      next: () => {
        this.router.navigate(['/login']);
        this.snackbarService.showOk('Account activated successfully. You may now login')
      },
      error: (error) => {
        this.snackbarService.showErrorObject(error);
        this.email = '';
        this.activationCode = '';
      }
    });
  }
}
