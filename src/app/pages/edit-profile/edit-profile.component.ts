import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  candidate: Candidat = {} as Candidat;

  constructor(
    private candidatService: CandidateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCandidat();
  }

  getCandidat(): void {
    const canId = this.route.snapshot.params['id'];
    this.candidatService.getCandidateById(canId).subscribe((data: Candidat) => {
      this.candidate = data;
    });
  }

  onSubmit(): void {
    const canId = this.route.snapshot.params['id'];
    this.candidatService.updateCandidate(canId, this.candidate).subscribe(() => {
      this.router.navigate(['/profile-candidat', canId]);
    });
  }

}
