import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-job',
  templateUrl: './update-job.component.html',
  styleUrls: ['./update-job.component.css']
})
export class UpdateJobComponent implements OnInit {

  job: Job = {} as Job;
  jobId: number=0;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.jobId = +id;
      this.loadJob();
    } else {
      console.error('Job ID not found in route parameters.');
    }
  }

  loadJob() {
    this.jobService.getJobById(this.jobId).subscribe(
      data => {
        this.job = data;
      },
      error => {
        console.error('Error loading job:', error);
      }
    );
  }

  onSubmit() {
    this.jobService.updateJob(this.jobId, this.job).subscribe(
      response => {
        console.log('Job updated:', response);
        Swal.fire(
          'Succès!',
          'The job was successfully updated.',
          'success'
        );
        this.router.navigate(['/listjob']); 
      },
      error => {
        console.error('Error updating job:', error);
        Swal.fire(
          'Erreur!',
          'Il y a eu une erreur lors de la mise à jour du job.',
          'error'
        );
      }
    );
  }

}
