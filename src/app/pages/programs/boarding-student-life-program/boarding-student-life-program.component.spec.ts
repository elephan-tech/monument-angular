import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoardingStudentLifeProgramComponent } from './boarding-student-life-program.component';

describe('BoardingStudentLifeProgramComponent', () => {
  let component: BoardingStudentLifeProgramComponent;
  let fixture: ComponentFixture<BoardingStudentLifeProgramComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardingStudentLifeProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardingStudentLifeProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
