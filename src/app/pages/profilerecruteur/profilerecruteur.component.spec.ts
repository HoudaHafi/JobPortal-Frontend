import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilerecruteurComponent } from './profilerecruteur.component';

describe('ProfilerecruteurComponent', () => {
  let component: ProfilerecruteurComponent;
  let fixture: ComponentFixture<ProfilerecruteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilerecruteurComponent]
    });
    fixture = TestBed.createComponent(ProfilerecruteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
