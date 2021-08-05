import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UpdatesCalendarComponent } from './updates-calendar.component';

describe('UpdatesCalendarComponent', () => {
  let component: UpdatesCalendarComponent;
  let fixture: ComponentFixture<UpdatesCalendarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatesCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
