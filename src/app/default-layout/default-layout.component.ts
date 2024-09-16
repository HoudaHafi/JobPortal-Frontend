import { Component } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {

  searchResults: Job[] = [];

  onJobSearch(jobs: Job[]) {
    console.log('onJobSearch called', jobs)
    this.searchResults = jobs;
  }
}
