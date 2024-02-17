import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private snackbarService: SnackbarService, private router: Router) {}

  isLoading: boolean = false;

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  birthday: Date | null = null;
  passwordRetype: string = '';
  passwordsMismatch: boolean = true;
  
  user: User = new User();

  register(): void {
    if (this.passwordRetype !== this.password) {
      this.snackbarService.showErrorMessage('Error: Passwords do not match');
      return;
    }

    this.isLoading = true;

    this.user.birthday = this.birthday;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.user.passwordHash = this.password;

    this.authService.register(this.user).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/login']);
        this.snackbarService.showOk('Account Created Successfully! You can now Login');
      },
      error: (error) => {
        this.isLoading = false;
        this.snackbarService.showErrorObject(error);

        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.birthday = null;
        this.passwordRetype = '';
      }
    });
  }
}
