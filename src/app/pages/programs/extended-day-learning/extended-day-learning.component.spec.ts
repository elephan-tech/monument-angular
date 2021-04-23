import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedDayLearningComponent } from './extended-day-learning.component';

describe('ExtendedDayLearningComponent', () => {
  let component: ExtendedDayLearningComponent;
  let fixture: ComponentFixture<ExtendedDayLearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendedDayLearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedDayLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
