import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/config';
import { User, UserRole } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }

  private apiUrl = API_BASE_URL + 'Auth';

  login(email: string, password: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/login?email=${email}&password=${password}`, null);
  }

  register(user: User): Observable<any> {
    return this.http.post(this.apiUrl + "/register", user);
  }

  logout(): void {
    this.router.navigate(['/login']);
    localStorage.removeItem('GiftyJWT');
  }

  activate(email: string, code: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/activate?email=${email}&code=${code}`, null);
  }

  getUserRoleFromJWT(): any {
    const token = localStorage.getItem('GiftyJWT');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);

      const roleClaimKey = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";

      const decodedUserRole = decodedToken[roleClaimKey];

      return decodedUserRole;
    } else {
      return null;
    }
  }

  getUserEmailFromJWT(): any {
    const token = localStorage.getItem('GiftyJWT');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);

      const emailClaimKey = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress";

      const decodedUserEmail = decodedToken[emailClaimKey];

      return decodedUserEmail;
    } else {
      return null;
    }
  }
}
