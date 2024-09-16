import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobApplication, StatusEnum } from '../models/job-application';
import { ScoreDTO } from '../models/ScoreDTO';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private apiUrl = "http://localhost:8080/api/jobApplication";

  constructor(private http: HttpClient) { }

  hasCandidateAppliedForJob(candidateId: number, jobId: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/check?candidateId=${candidateId}&jobId=${jobId}`);
  }

  createJobApplication(jobAppDTO: any, cvFile: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('jobAppDTO', JSON.stringify(jobAppDTO));
    formData.append('cv', cvFile);

    return this.http.post(`${this.apiUrl}/create`, formData);
  }

  getApplicationsByCandidatId(candidatId: number): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(`${this.apiUrl}/byCandidat/${candidatId}`);
  }

  downloadCv(jobApplicationId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/downloadCv/${jobApplicationId}`, { responseType: 'blob' });
  }

  calculateScore(jobId: number, candidateId: number): Observable<ScoreDTO[]> {
    return this.http.get<ScoreDTO[]>(`${this.apiUrl}/calculateScore?jobId=${jobId}&candidateId=${candidateId}`);
  }

  updateJobApplicationStatus(id: number, status: StatusEnum): Observable<JobApplication> {
    return this.http.put<JobApplication>(`${this.apiUrl}/${id}/status`, null, { params: { status } });
  }
}
