import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  avatarOrLogoUrl: string | null = null;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.avatarOrLogoUrl = this.authService.getAvatarOrLogoUrl();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  navigateToProfile(): void {
    if (this.authService.isCandidatLoggedIn()) {
      this.router.navigate([`/profile-candidat/${this.authService.getUserId()}`]);
    } else if (this.authService.isRecruteurLoggedIn()) {
      this.router.navigate([`/profile-recruteur/${this.authService.getUserId()}`]);
    }
  }
  
}
