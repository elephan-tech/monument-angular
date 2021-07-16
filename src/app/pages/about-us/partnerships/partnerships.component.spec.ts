import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartnershipsComponent } from './partnerships.component';

describe('PartnershipsComponent', () => {
  let component: PartnershipsComponent;
  let fixture: ComponentFixture<PartnershipsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnershipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
