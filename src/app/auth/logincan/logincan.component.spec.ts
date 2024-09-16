import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincanComponent } from './logincan.component';

describe('LogincanComponent', () => {
  let component: LogincanComponent;
  let fixture: ComponentFixture<LogincanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogincanComponent]
    });
    fixture = TestBed.createComponent(LogincanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
