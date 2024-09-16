import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logincan',
  templateUrl: './logincan.component.html',
  styleUrls: ['./logincan.component.css']
})
export class LogincanComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login({ email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          if(this.authService.isCandidatLoggedIn()){
            console.log('Login successful for candidate', response);
            this.router.navigate(['/']);
             
          }
          
        },
        error: (error) => {
          this.errorMessage = 'Login failed for candidate';
          console.error('Error during login', error);
        }
      });
  }

}
