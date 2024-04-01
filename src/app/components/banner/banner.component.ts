import { Component } from '@angular/core';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  faSearch = faSearch;
  faLocationDot = faLocationDot;

}
