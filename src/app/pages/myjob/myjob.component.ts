import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobApplication } from 'src/app/models/job-application';
import { AuthService } from 'src/app/services/auth.service';
import { JobApplicationService } from 'src/app/services/job-application.service';


@Component({
  selector: 'app-myjob',
  templateUrl: './myjob.component.html',
  styleUrls: ['./myjob.component.css']
})
export class MyjobComponent implements OnInit {
  jobApplications: JobApplication[] = [];

  constructor(
    private jobApplicationService: JobApplicationService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.loadJobApplications(Number(userId));
    } else {
      console.error('No user ID found in local storage');
    }
  }

  loadJobApplications(candidateId: number): void {
    this.jobApplicationService.getApplicationsByCandidatId(candidateId).subscribe(
      (data: JobApplication[]) => {
        this.jobApplications = data;
      },
      (error) => {
        console.error('Error fetching job applications', error);
      }
    );
  }
  

}
