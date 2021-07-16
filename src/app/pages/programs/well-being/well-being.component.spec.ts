import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WellBeingComponent } from './well-being.component';

describe('WellBeingComponent', () => {
  let component: WellBeingComponent;
  let fixture: ComponentFixture<WellBeingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WellBeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellBeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
