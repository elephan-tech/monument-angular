import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADayAtMonumentComponent } from './a-day-at-monument.component';

describe('ADayAtMonumentComponent', () => {
  let component: ADayAtMonumentComponent;
  let fixture: ComponentFixture<ADayAtMonumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADayAtMonumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADayAtMonumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
