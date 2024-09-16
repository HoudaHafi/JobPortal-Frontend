import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit{
  newPassword: string = '';
  token: string = '';
  role: string = '';

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    
  }
  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    this.role = this.route.snapshot.paramMap.get('role') || '';
    console.log( "houda",this.token);
  }

  resetPassword(): void {
    this.authService.resetPassword(this.token, this.newPassword).subscribe(
      response => {
        console.log('Password reset response:', response);
        alert('Password has been reset successfully.');
        if (this.role === 'recruiter') {
          this.router.navigate(['/loginRec']);
        } else {
          this.router.navigate(['/loginCan']);
        }
      },
      error => {
        console.error('Error resetting password', error);
        alert('Error resetting password');
      }
    );
  }

}
