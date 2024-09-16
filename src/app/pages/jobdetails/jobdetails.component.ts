import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCalendar, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
  styleUrls: ['./jobdetails.component.css']
})
export class JobdetailsComponent implements OnInit{
  job: any;

  faLocationDot = faLocationDot;
  faClock = faClock;
  faCalendar = faCalendar;

  constructor(private jobService: JobService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getJobDetails();
  }

  getJobDetails(){
    const jobId = this.route.snapshot.params['id'];
      this.jobService.getJobById(jobId).subscribe((data: any) => {
        this.job = data;
      });
  }

}
