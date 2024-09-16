import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recruiter } from '../models/recruiter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecruiterService {

  private baseURL = "http://localhost:8080/api/recruteur";

  constructor(private http: HttpClient) { }

  getRecruiterById(id: number): Observable<Recruiter> {
    return this.http.get<Recruiter>(`${this.baseURL}/${id}`);
  }

  updateRecruteur(id: number, recruiter: Recruiter): Observable<Recruiter> {
    return this.http.put<Recruiter>(`${this.baseURL}/update/${id}`, recruiter);
  }
}
