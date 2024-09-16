import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faCalendar, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges{

  @Input() filters: { location: string, datepub: string, type: string } = { location: '', datepub: '', type: '' };
  @Input() searchResults: Job[] = [];

  jobs: Job[] = [];

  faLocationDot = faLocationDot;
  faClock = faClock;
  faCalendar = faCalendar;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filters']) {  // Accès correct aux propriétés de l'index signature
      this.getJobs();
    }
    if (changes['searchResults']) {
      console.log('CardComponent searchResults', this.searchResults);
      this.jobs = this.searchResults;
      
    }
  }

  getJobs() {
    const { location, datepub, type } = this.filters;
    this.jobService.filterJobs(location, datepub, type).subscribe(
      (data: Job[]) => {
        const now = new Date();
        this.jobs = data.filter(job => {
          const jobDate = new Date(job.datepub);
          if (datepub === '24h') {
            return (now.getTime() - jobDate.getTime()) <= 24 * 60 * 60 * 1000;
          } else if (datepub === '7d') {
            return (now.getTime() - jobDate.getTime()) <= 7 * 24 * 60 * 60 * 1000;
          } else if (datepub === '1m') {
            return (now.getTime() - jobDate.getTime()) <= 30 * 24 * 60 * 60 * 1000;
          } else {
            return true; // All time
          }
        });
        this.jobs.forEach((job: Job) => {
          this.jobService.getRecruteurLogo(job.recruteur.id).subscribe(
            (logoData: any) => {
              job.recruteur.logo = logoData.logo;
            },
            (error: HttpErrorResponse) => {
              console.error(error);
            }
          );
        });
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
