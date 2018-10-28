import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegisrtationComponent } from './student-regisrtation.component';

describe('StudentRegisrtationComponent', () => {
  let component: StudentRegisrtationComponent;
  let fixture: ComponentFixture<StudentRegisrtationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentRegisrtationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentRegisrtationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
