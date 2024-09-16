import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginrecComponent } from './loginrec.component';

describe('LoginrecComponent', () => {
  let component: LoginrecComponent;
  let fixture: ComponentFixture<LoginrecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginrecComponent]
    });
    fixture = TestBed.createComponent(LoginrecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
