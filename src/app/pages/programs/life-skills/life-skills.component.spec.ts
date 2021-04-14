import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeSkillsComponent } from './life-skills.component';

describe('LifeSkillsComponent', () => {
  let component: LifeSkillsComponent;
  let fixture: ComponentFixture<LifeSkillsComponent>;

  beforeEach(async(() => {
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
