import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EnvTagComponent } from './env-tag.component';

describe('EnvTagComponent', () => {
  let component: EnvTagComponent;
  let fixture: ComponentFixture<EnvTagComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
