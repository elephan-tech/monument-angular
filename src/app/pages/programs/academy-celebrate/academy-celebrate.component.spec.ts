import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyCelebrateComponent } from './academy-celebrate.component';

describe('AcademyCelebrateComponent', () => {
  let component: AcademyCelebrateComponent;
  let fixture: ComponentFixture<AcademyCelebrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyCelebrateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademyCelebrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
