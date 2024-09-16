import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'http://localhost:8080/api/email';

  constructor(private http: HttpClient) { }

  sendMeetingInvitation(candidatId: number, recruteurId: number, date: string, time: string, link: string): Observable<any> {
    const invitation = { candidatId, recruteurId, date, time, link };
    return this.http.post(`${this.apiUrl}/send-email`, invitation);
  }
}
