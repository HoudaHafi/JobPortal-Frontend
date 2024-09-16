import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { StatusEnum } from 'src/app/models/job-application';
import { ScoreDTO } from 'src/app/models/ScoreDTO';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobApplicationService } from 'src/app/services/job-application.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  candidate: Candidat | null = null; 
  candidateId: string | undefined;
  scores: ScoreDTO[] = [];
  jobId: number | undefined;
  jobApplicationId: number | undefined;
  showMeetingForm = false;
  statusOptions = Object.values(StatusEnum);
  selectedStatus: StatusEnum = StatusEnum.PENDING;
  
  

  constructor(
    private route: ActivatedRoute,
    private candidateService: CandidateService,private jobAppService: JobApplicationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.candidateId = params['id'];
      this.jobId = params['jobId'];
      this.jobApplicationId = params['jobAppId'];
    });
    this.loadCandidate();
  }

  loadCandidate(): void {
    if (this.candidateId) {
        this.candidateService.getCandidateById(this.candidateId).subscribe(
            data => {
                this.candidate = data;
                console.log("Candidate details retrieved:", data);
            },
            error => {
                console.error("Error fetching candidate details:", error);
            }
        );
    } else {
        console.error("Candidate ID is null or undefined.");
    }
}

calculateScore(): void {
  console.log(this.jobId, this.candidateId);
  if (this.jobId && this.candidateId) {
    this.jobAppService.calculateScore(this.jobId, +this.candidateId).subscribe(
      scores => {
        this.scores = scores.map(score => {
          return {
            ...score,
            percentage: parseFloat(score.percentage.toFixed(2))
          };
        });
        console.log("Scores retrieved:", this.scores);
      },
      error => {
        console.error("Error fetching scores:", error);
      }
    );
  } else {
    console.error("Job ID or Candidate ID is null or undefined.");
  }
}

toggleMeetingForm(): void {
  this.showMeetingForm = true;
  console.log("showMeetingForm:", this.showMeetingForm);
}

hideInvitationForm() {
  this.showMeetingForm = false;
}


updateStatus(): void {
  if (this.jobApplicationId && this.selectedStatus) {
    this.jobAppService.updateJobApplicationStatus(this.jobApplicationId, this.selectedStatus).subscribe(
      updatedJobApp => {
        console.log("Status updated successfully:", updatedJobApp);
        Swal.fire({
          title: 'Success!',
          text: 'The status has been updated successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      },
      error => {
        console.error("Error updating status:", error);
        Swal.fire({
          title: 'Error!',
          text: 'There was a problem updating the status. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  } else {
    console.error("Job Application ID or selected status is null or undefined.");
  }
}



}
