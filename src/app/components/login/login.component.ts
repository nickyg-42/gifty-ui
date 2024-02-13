
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginValid = true;

  constructor(private authService: AuthService) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe({
      next: (token: string) => {
        this.loginValid = true;
        localStorage.setItem('GiftyJWT', token)
      },
      error: () => {
        this.loginValid = false;
      }
    });
  }
}

