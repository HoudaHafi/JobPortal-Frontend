import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Job } from 'src/app/models/job';
import { AuthService } from 'src/app/services/auth.service';
import { JobService } from 'src/app/services/job.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  faSearch = faSearch;

  jobs: Job[] = [];
  recruteurId: number | null = null;

  constructor(private jobService: JobService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.recruteurId = parseInt(this.authService.getUserId() || '0', 10); 
    if (this.recruteurId && this.recruteurId !== 0) {
      this.getJobsByRecruteur();
    } else {
      console.warn("No recruteur ID found in localStorage.");
    }
  }

  private getJobsByRecruteur() {
    if (this.recruteurId) {
      this.jobService.getJobsByRecruteurId(this.recruteurId).subscribe(
        data => {
          console.log("Jobs retrieved:", data);
          this.jobs = data;
        },
        error => {
          console.error("Error fetching jobs:", error);
        }
      );
    } else {
      console.warn("Recruteur ID not available.");
    }
  }

  navigateToJobDetails(jobId: number) {
    this.router.navigate(['/jobdetails', jobId]);
  }

  navigateToCandidates(jobId: number) {
    this.router.navigate(['/candidates', jobId]);
  }

  updateJob(jobId: number) {
    this.router.navigate(['/updatejob', jobId]);
  }

  confirmDelete(jobId: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteJob(jobId);
      }
    });
  }

  deleteJob(jobId: number) {
    this.jobService.deleteJob(jobId).subscribe(
      response => {
        console.log('Job deleted:', response);
        Swal.fire(
          'Deleted!',
          'Your job has been deleted.',
          'success'
        );
        this.router.navigate(['/listjob']);
      },
      error => {
        console.error('Error deleting job:', error);
        Swal.fire(
          'Error!',
          'There was an error deleting the job.',
          'error'
        );
      }
    );
  }

}
