import { Component, EventEmitter, Output } from '@angular/core';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Job } from 'src/app/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  faSearch = faSearch;
  faLocationDot = faLocationDot;

  searchTitle: string = '';
  searchLocation: string = '';

  constructor(private jobService: JobService) {}

  @Output() jobSearchEvent = new EventEmitter<Job[]>();

  onSearch() {
    this.jobService.searchJobs(this.searchTitle, this.searchLocation)
      .subscribe((jobs: Job[]) => {
        console.log(jobs); // Handle the search results as needed
        console.log('Search results', jobs);
        this.jobSearchEvent.emit(jobs);
      });
  }

}
