import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FamilyResourcesComponent } from './family-resources.component';

describe('FamilyResourcesComponent', () => {
  let component: FamilyResourcesComponent;
  let fixture: ComponentFixture<FamilyResourcesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
