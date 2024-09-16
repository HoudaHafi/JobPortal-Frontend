import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprofilerecComponent } from './editprofilerec.component';

describe('EditprofilerecComponent', () => {
  let component: EditprofilerecComponent;
  let fixture: ComponentFixture<EditprofilerecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditprofilerecComponent]
    });
    fixture = TestBed.createComponent(EditprofilerecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
