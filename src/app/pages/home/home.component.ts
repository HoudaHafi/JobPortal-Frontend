import { Component, Input, SimpleChanges } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filters = { location: '', datepub: '', type: '' };
  @Input() searchResults: Job[] = [];

  onFilterChanged(newFilters: {location: string, datepub: string, type: string}) {
    this.filters = newFilters;
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('HomeComponent searchResults', this.searchResults);
  }
  

}
