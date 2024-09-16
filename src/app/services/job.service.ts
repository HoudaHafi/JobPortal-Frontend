import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Job } from '../models/job';
import { Observable } from 'rxjs';
import { JobApplication } from '../models/job-application';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private baseURL = "http://localhost:8080/api/job";

  constructor(private httpClient: HttpClient) { }

  getJobList(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/read`);
  }

  getRecruteurLogo(recruteurId: number): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/${recruteurId}/logo`);
  } 
  
  getJobById(jobId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/read/${jobId}`);
  }

  createJob(job: Job): Observable<any>{
    return this.httpClient.post(`${this.baseURL}/create`, job);
  }

  getJobsByRecruteurId(recruteurId: number): Observable<Job[]> {
    return this.httpClient.get<Job[]>(`${this.baseURL}/recruteur/${recruteurId}`);
  }

  getApplicationsByJobId(jobId: number): Observable<any> {
    return this.httpClient.get<any>(`http://127.0.0.1:5000/similarity/${jobId}`);
  }

  updateJob(id: number, job: Job): Observable<Job> {
    return this.httpClient.put<Job>(`${this.baseURL}/update/${id}`, job);
  }

  deleteJob(id: number): Observable<string> {
    return this.httpClient.delete<string>(`${this.baseURL}/delete/${id}`);
  }

  filterJobs(location?: string, datepub?: string, type?: string): Observable<Job[]> {
    let params = new HttpParams();
    if (location) {
      params = params.set('location', location);
    }
    if (datepub) {
      params = params.set('datepub', datepub);
    }
    if (type) {
      params = params.set('type', type);
    }
    return this.httpClient.get<Job[]>(`${this.baseURL}/filter`, { params });
  }

  searchJobs(title: string, location: string): Observable<Job[]> {
    const params = new HttpParams()
      .set('title', title)
      .set('location', location);
    
    return this.httpClient.get<Job[]>(`${this.baseURL}/search`, { params });
  }

}
