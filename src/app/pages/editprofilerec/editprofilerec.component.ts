import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recruiter } from 'src/app/models/recruiter';
import { RecruiterService } from 'src/app/services/recruiter.service';

@Component({
  selector: 'app-editprofilerec',
  templateUrl: './editprofilerec.component.html',
  styleUrls: ['./editprofilerec.component.css']
})
export class EditprofilerecComponent {

  recruiter: Recruiter = {} as Recruiter;

  constructor(
    private recService: RecruiterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getRecruteur();
  }

  getRecruteur(): void {
    const recId = this.route.snapshot.params['id'];
    this.recService.getRecruiterById(recId).subscribe((data: Recruiter) => {
      this.recruiter = data;
    });
  }

  onSubmit(): void {
    const recId = this.route.snapshot.params['id'];
    this.recService.updateRecruteur(recId, this.recruiter).subscribe(() => {
      this.router.navigate(['/profile-recruteur', recId]);
    });
  }
}
