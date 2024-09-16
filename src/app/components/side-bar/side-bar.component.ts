import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  @Output() filterChanged = new EventEmitter<{location: string, datepub: string, type: string}>();

  selectedLocation: string = '';
  selectedDatepub: string = '';
  selectedType: string = '';

  onFilterChange() {
    this.filterChanged.emit({
      location: this.selectedLocation,
      datepub: this.selectedDatepub,
      type: this.selectedType
    });
  }

}
