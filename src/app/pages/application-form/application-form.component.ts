import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Candidat } from 'src/app/models/candidat';
import { JobApplicationService } from 'src/app/services/job-application.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  @Output() formClosed = new EventEmitter<void>();
  @Input() candidateData: Candidat = {} as Candidat;
  @Input() jobId!: number;
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder, private jobApplicationService: JobApplicationService) {
    console.log('Constructor: ApplicationFormComponent initialized');
    this.applicationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      adresse: ['', Validators.required],
      telephone: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      niveau: ['', Validators.required],
      nbexperience: ['', Validators.required],
      cv: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit: ApplicationFormComponent initialized');
    this.applicationForm.patchValue({
      firstName: this.candidateData.firstName,
      lastName: this.candidateData.lastName,
      email: this.candidateData.email,
      adresse: this.candidateData.adresse,
      telephone: this.candidateData.telephone,
      dateNaissance: this.candidateData.dateNaissance,
      niveau: this.candidateData.niveau,
      nbexperience: this.candidateData.nbexperience
    });
  }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      
      this.applicationForm.get('cv')!.setValue(file);
    }
  }

  cancelApplyForm() {
    this.formClosed.emit();
  }

  submitApplication(): void {
    console.log('submitApplication: Method called');
    if (this.applicationForm.valid) {
      console.log('submitApplication: Form is valid');
      const jobAppDTO = {
        "jobId": this.jobId,
        "candidatId": this.candidateData.id
        
      };

      const cvFile = this.applicationForm.get('cv')!.value;

      this.jobApplicationService.createJobApplication(jobAppDTO, cvFile).subscribe(
        response => {
          console.log('Application submitted successfully', response);
          this.formClosed.emit();
        },
        error => {
          console.error('Error submitting application', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }


  
}
