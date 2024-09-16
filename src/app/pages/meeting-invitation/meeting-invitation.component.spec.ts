import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingInvitationComponent } from './meeting-invitation.component';

describe('MeetingInvitationComponent', () => {
  let component: MeetingInvitationComponent;
  let fixture: ComponentFixture<MeetingInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetingInvitationComponent]
    });
    fixture = TestBed.createComponent(MeetingInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
