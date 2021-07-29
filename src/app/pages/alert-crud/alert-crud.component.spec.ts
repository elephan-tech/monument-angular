import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertCrudComponent } from './alert-crud.component';

describe('AlertCrudComponent', () => {
  let component: AlertCrudComponent;
  let fixture: ComponentFixture<AlertCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
