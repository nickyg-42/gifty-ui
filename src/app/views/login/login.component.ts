
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private snackbarService: SnackbarService, private router: Router, private authService: AuthService) { }

  email: string = '';
  password: string = '';
  isLoading: boolean = false;
  
  login(): void {
    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (token: string) => {
        this.isLoading = false;
        localStorage.setItem('GiftyJWT', token);
        this.router.navigate(['/my-lists']);
      },
      error: (error) => {
        this.isLoading = false;
        this.snackbarService.showErrorObject(error);
        this.email = '';
        this.password = '';
      }
    });
  }
}

