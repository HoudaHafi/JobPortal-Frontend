import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private baseURL = "http://localhost:8080/api/candidat";

  constructor(private http: HttpClient) { }

  getCandidateById(candidateId: string): Observable<Candidat> {
    return this.http.get<Candidat>(`${this.baseURL}/${candidateId}`);
  }

  updateCandidate(id: number, candidat: Candidat): Observable<Candidat> {
    return this.http.put<Candidat>(`${this.baseURL}/update/${id}`, candidat);
  }
}
