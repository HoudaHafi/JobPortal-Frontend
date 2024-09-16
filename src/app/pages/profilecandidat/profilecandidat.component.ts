import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-profilecandidat',
  templateUrl: './profilecandidat.component.html',
  styleUrls: ['./profilecandidat.component.css']
})
export class ProfilecandidatComponent {

  candidat: any;

  constructor(private candidatService: CandidateService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCandidat();
  }

  getCandidat(): void {
    const canId = this.route.snapshot.params['id'];
    this.candidatService.getCandidateById(canId).subscribe((data: any) => {
      this.candidat = data;
    });
  }

}
