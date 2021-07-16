import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopnavigationComponent } from './topnavigation.component';

describe('TopnavigationComponent', () => {
  let component: TopnavigationComponent;
  let fixture: ComponentFixture<TopnavigationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
