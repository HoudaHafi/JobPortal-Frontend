import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myjob',
  templateUrl: './myjob.component.html',
  styleUrls: ['./myjob.component.css']
})
export class MyjobComponent {

  constructor(private router: Router) { }

  navigateToPostJob() {
    this.router.navigate(['/post-job']);
}

}
