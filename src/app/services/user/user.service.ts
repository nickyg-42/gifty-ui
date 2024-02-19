import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from 'src/app/config';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private apiUrl = API_BASE_URL + 'User';

  createUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  
  getUserById(userId: string): Observable<User> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<User>(url);
  }

  getUserByEmail(email: string): Observable<User> {
    const url = `${this.apiUrl}/email/${email}`;
    return this.http.get<User>(url);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  updateUser(userId: string, updatedUser: User): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put(url, updatedUser);
  }

  deleteUser(userId: string): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url);
  }

  setStatus(userId: string, status: boolean): Observable<any> {
    const url = `${this.apiUrl}/activate?id=${userId}`;
    return this.http.put(url, status);
  }
}
