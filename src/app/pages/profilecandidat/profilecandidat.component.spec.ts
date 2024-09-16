import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilecandidatComponent } from './profilecandidat.component';

describe('ProfilecandidatComponent', () => {
  let component: ProfilecandidatComponent;
  let fixture: ComponentFixture<ProfilecandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilecandidatComponent]
    });
    fixture = TestBed.createComponent(ProfilecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
