import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-loginrec',
  templateUrl: './loginrec.component.html',
  styleUrls: ['./loginrec.component.css']
})
export class LoginrecComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          if(this.authService.isRecruteurLoggedIn()){
            console.log('Login successful for recruiter', response);
            this.router.navigate(['/']);
             
          }
          
        },
        error: (error) => {
          this.errorMessage = 'Login failed for recruiter';
          console.error('Error during login', error);
        }
      });
  }

}
