
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SnackbarService } from 'src/app/services/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginValid = true;

  constructor(private snackbarService: SnackbarService, private router: Router, private authService: AuthService) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (token: string) => {
        this.loginValid = true;
        localStorage.setItem('GiftyJWT', token);
        this.router.navigate(['/main']);
      },
      error: (err) => {
        this.loginValid = false;
        this.snackbarService.showError('Login Failed: ' + err.error)
        console.log(err);
      }
    });
  }
}

