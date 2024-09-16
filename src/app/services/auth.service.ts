import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = "http://localhost:8080/api/auth";

  constructor(private http: HttpClient) { }

  registerRec(signupRequest: any): Observable<any> {
    return this.http.post(`${this.baseURL}/recreteur/register`, signupRequest)
  }

  registerCan(signupRequest: any): Observable<any> {
    return this.http.post(`${this.baseURL}/condidate/register`, signupRequest)
  }

  login(loginRequest: any): Observable<any> {
    return this.http.post(`${this.baseURL}/authenticate`, loginRequest).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('role', response.role);
        localStorage.setItem('userId', response.id);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('userId');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  isCandidatLoggedIn(): boolean {
    return this.getRole() === 'Condidate';
  }

  isRecruteurLoggedIn(): boolean {
    return this.getRole() === 'Recruteur';
  }

  getAvatarOrLogoUrl(): string {
    const userId = this.getUserId();
    const role = this.getRole();
    if (role === 'Condidate') {
      return `http://localhost:8080/api/candidat/${userId}/avatar`;
    } else if (role === 'Recruteur') {
      return `http://localhost:8080/api/job/${userId}/logo`;
    }
    return '';
  }

  sendResetPasswordLink(email: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { email: email };
    console.log(body)
    return this.http.post<any>(`http://localhost:8080/api/auth/send-reset-password-link`, body, { headers: headers });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const body = { token: token ,newPassword: newPassword  };
    console.log(body)
    return this.http.post(`http://localhost:8080/api/auth/reset-password`,  body, { headers: headers });
  }
}
