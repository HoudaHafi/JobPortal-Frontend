import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Candidat } from 'src/app/models/candidat';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-can',
  templateUrl: './register-can.component.html',
  styleUrls: ['./register-can.component.css']
})
export class RegisterCanComponent {
  user: any = {
    id: 0,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    telephone: '',
    niveau: '',
    nbexperience: '',
    dateNaissance: '',
    adresse: ''
  };
  errorMessage: string = '';
  selectedFile: any;

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    const formData = new FormData();
    
      formData.append('avatar', this.selectedFile);
     
       
      formData.append('request', JSON.stringify(this.user));
    this.authService.registerCan(formData)
      .subscribe({
        next: (response) => {
          console.log('Registration successful for candidate', response);
          this.router.navigate(['/loginCan']);
        },
        error: (error) => {
          this.errorMessage = 'Registration failed for candidate';
          console.error('Error during registration', error);
        }
      });
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
