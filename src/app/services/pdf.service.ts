import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private apiUrl = 'http://localhost:8080/api/pdf'; 

  constructor(private http: HttpClient) { }

  extractText(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(this.apiUrl + '/extract', formData);
  }

  containsWord(file: File, word: string): Observable<boolean> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('word', word);
    return this.http.post<boolean>(this.apiUrl + '/contains', formData);
  }

  countWordOccurrences(file: File, word: string): Observable<number> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('word', word);
    return this.http.post<number>(this.apiUrl + '/count', formData);
  }

}
