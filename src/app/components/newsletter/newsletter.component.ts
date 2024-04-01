import { Component } from '@angular/core';
import { faEnvelopeOpenText, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {

  faEnvelopeOpenText = faEnvelopeOpenText;
  faRocket =faRocket;

}
