import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Recruiter } from 'src/app/models/recruiter';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-rec',
  templateUrl: './register-rec.component.html',
  styleUrls: ['./register-rec.component.css']
})
export class RegisterRecComponent {
  user: any = {
    id: 0,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    societe: '',
    poste: '',
    secteur: '',
    idsociete: '',
    adrsociete: ''
  };
  errorMessage: string = '';
  selectedFile: any;

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {

    const formData = new FormData();
    
      formData.append('logo', this.selectedFile);
     
       
      formData.append('request', JSON.stringify(this.user));

    this.authService.registerRec(formData)
      .subscribe({
        next: (response) => {
          console.log('Registration successful for recruiter', response);
          this.router.navigate(['/loginRec']);
        },
        error: (error) => {
          this.errorMessage = 'Registration failed for recruiter';
          console.error('Error during registration', error);
        }
      });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }



}
