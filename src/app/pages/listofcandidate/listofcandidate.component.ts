import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faDownload, faUser } from '@fortawesome/free-solid-svg-icons';
import { JobApplication } from 'src/app/models/job-application';
import { Postulation } from 'src/app/models/postulation';
import { JobApplicationService } from 'src/app/services/job-application.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-listofcandidate',
  templateUrl: './listofcandidate.component.html',
  styleUrls: ['./listofcandidate.component.css']
})
export class ListofcandidateComponent implements OnInit {

  faDownload = faDownload;
  faUser = faUser;

  jobId: number | undefined;
  candidates: Postulation[] = [];

  constructor(private route: ActivatedRoute, private jobService: JobService, private jobAppService: JobApplicationService, private router: Router ) { }

  ngOnInit(): void {
    this.jobId = this.route.snapshot.params['jobId'];
    this.loadCandidates();
  }

  loadCandidates() {
    if (this.jobId) {
      this.jobService.getApplicationsByJobId(this.jobId).subscribe(
        data => {
          console.log("Candidates retrieved:test", data);
          this.candidates = data;
        },
        error => {
          console.error("Error fetching candidates:", error);
        }
      );
    } else {
      console.warn("No job ID found in route params.");
    }
  }

  downloadCv(jobApplicationId: number) {
    this.jobAppService.downloadCv(jobApplicationId).subscribe(
      blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cv.pdf'; // or derive the filename from the response headers
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      error => {
        console.error("Error downloading CV:", error);
      }
    );
  }

  viewProfile(candidateId: number, jobId: number,jobApplicationId: number): void {
    console.log("test")
    console.log(candidateId)
    console.log(jobId)
    console.log(jobApplicationId)
    this.router.navigate(['/profile', candidateId, jobId, jobApplicationId]);
  }

}
