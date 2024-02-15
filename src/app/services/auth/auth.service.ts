import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private apiUrl = API_URL;

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login?email=${email}&password=${password}`, null);
  }

  register(user: User): Observable<any> {
    return this.http.post(this.apiUrl + "/register", user);
  }

  logout(): void {
    localStorage.removeItem('GiftyJWT');
  }
}
