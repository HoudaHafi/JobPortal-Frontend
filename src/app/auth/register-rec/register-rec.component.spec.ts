import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRecComponent } from './register-rec.component';

describe('RegisterRecComponent', () => {
  let component: RegisterRecComponent;
  let fixture: ComponentFixture<RegisterRecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterRecComponent]
    });
    fixture = TestBed.createComponent(RegisterRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
