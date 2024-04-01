import { Component } from '@angular/core';
import { faCalendar, faClock, faDollarSign, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  faLocationDot = faLocationDot;
  faClock = faClock;
  faDollarSign = faDollarSign;
  faCalendar = faCalendar;

}
