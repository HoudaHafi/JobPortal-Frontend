import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})
export class ForgotpassComponent {
  email: string = '';

  constructor(private authService: AuthService) {}

  sendResetPasswordLink(): void {
    this.authService.sendResetPasswordLink(this.email).subscribe(
      response => {
        console.log("test");
        alert('Reset password link sent to your email.');
      },
      error => {
        console.error('Error sending reset password link', error);
        alert('Error sending reset password link');
      }
    );
  }

}
