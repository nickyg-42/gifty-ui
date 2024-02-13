import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7024/api/Auth';

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login?username=${username}&password=${password}`, null);
  }

  // register(user: CreateUser): Observable<any> {
  //   return this.http.post(this.apiUrl + "/register", user);
  // }

  logout(): void {
    localStorage.removeItem('GiftyJWT');
  }
}
