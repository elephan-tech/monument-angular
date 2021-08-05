import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AcademicsComponent } from './academics.component';

describe('AcademicsComponent', () => {
  let component: AcademicsComponent;
  let fixture: ComponentFixture<AcademicsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
