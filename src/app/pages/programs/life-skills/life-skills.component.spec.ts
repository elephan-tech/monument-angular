import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LifeSkillsComponent } from './life-skills.component';

describe('LifeSkillsComponent', () => {
  let component: LifeSkillsComponent;
  let fixture: ComponentFixture<LifeSkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
