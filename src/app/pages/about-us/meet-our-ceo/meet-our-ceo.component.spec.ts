import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MeetOurCeoComponent } from './meet-our-ceo.component';

describe('MeetOurCeoComponent', () => {
  let component: MeetOurCeoComponent;
  let fixture: ComponentFixture<MeetOurCeoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetOurCeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetOurCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
