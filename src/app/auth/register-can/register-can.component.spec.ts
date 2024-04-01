import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCanComponent } from './register-can.component';

describe('RegisterCanComponent', () => {
  let component: RegisterCanComponent;
  let fixture: ComponentFixture<RegisterCanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCanComponent]
    });
    fixture = TestBed.createComponent(RegisterCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
