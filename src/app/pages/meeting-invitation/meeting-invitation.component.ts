import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-meeting-invitation',
  templateUrl: './meeting-invitation.component.html',
  styleUrls: ['./meeting-invitation.component.css']
})
export class MeetingInvitationComponent implements OnInit{
  @Input() candidatId: number | undefined;
  @Output() formClosed = new EventEmitter<void>();
  meeting = {
    date: '',
    time: '',
    link: ''
  };

  constructor(private emailService: EmailService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  sendMeetingInvitation(): void {
    const recruteurId = this.authService.getUserId();
    if (this.candidatId && recruteurId) {
      const { date, time, link } = this.meeting;
      this.emailService.sendMeetingInvitation(this.candidatId, +recruteurId, date, time, link).subscribe(
        response => {
          console.log("Meeting invitation sent successfully:", response);
          this.formClosed.emit();
        },
        error => {
          console.error("Error sending meeting invitation:", error);
        }
      );
    } else {
      console.error("Candidat ID or Recruteur ID is null or undefined.");
    }
  }

  cancelInvitationForm() {
    this.formClosed.emit();
  }

}
