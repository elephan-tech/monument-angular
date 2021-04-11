import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalSchoolLunchProgramComponent } from './national-school-lunch-program.component';

describe('NationalSchoolLunchProgramComponent', () => {
  let component: NationalSchoolLunchProgramComponent;
  let fixture: ComponentFixture<NationalSchoolLunchProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalSchoolLunchProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalSchoolLunchProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
