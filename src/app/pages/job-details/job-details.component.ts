import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCalendar, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Candidat } from 'src/app/models/candidat';
import { AuthService } from 'src/app/services/auth.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobApplicationService } from 'src/app/services/job-application.service';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{
  job: any;
  applyFormVisible = false;
  candidateData: Candidat = {} as Candidat;
  hasApplied = false;


  faLocationDot = faLocationDot;
  faClock = faClock;
  faCalendar = faCalendar;

  constructor(private jobService: JobService, private route: ActivatedRoute, private router: Router,
    private authService: AuthService, private candidateService: CandidateService, private jobApplicationService: JobApplicationService) { }

  ngOnInit(): void {
    this.getJobDetails();
    this.checkIfCandidateHasApplied();
  }

  getJobDetails(){
    const jobId = this.route.snapshot.params['id'];
      this.jobService.getJobById(jobId).subscribe((data: any) => {
        this.job = data;
        this.checkIfCandidateHasApplied();
      });
  }

  checkIfCandidateHasApplied() {
    if (this.authService.isCandidatLoggedIn()) {
      const candidateId = Number(this.authService.getUserId());
      if (candidateId) {
        this.jobApplicationService.hasCandidateAppliedForJob(candidateId, this.job.id).subscribe(hasApplied => {
          this.hasApplied = hasApplied;
        });
      }
    }
  }


  showApplyForm() {
    if (this.authService.isCandidatLoggedIn()) {
      const candidateId = this.authService.getUserId();
      if (candidateId) {
        this.candidateService.getCandidateById(candidateId).subscribe((data: Candidat) => {
          this.candidateData = data;
          this.applyFormVisible = true;
          console.log("Candidate data:", this.candidateData);
        });
      }
    } else {
      this.router.navigate(['/loginCan']);
    }
  }

  hideApplyForm() {
    this.applyFormVisible = false;
  }

  
}

