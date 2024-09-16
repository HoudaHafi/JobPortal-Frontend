import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recruiter } from 'src/app/models/recruiter';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-profilerecruteur',
  templateUrl: './profilerecruteur.component.html',
  styleUrls: ['./profilerecruteur.component.css']
})
export class ProfilerecruteurComponent implements OnInit {

  recruiter: any;

  constructor(private recruiterService: RecruiterService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getRecruiter();
  }

  getRecruiter(): void {
    const recId = this.route.snapshot.params['id'];
    this.recruiterService.getRecruiterById(recId).subscribe((data: any) => {
      this.recruiter = data;
    });
  }

}
