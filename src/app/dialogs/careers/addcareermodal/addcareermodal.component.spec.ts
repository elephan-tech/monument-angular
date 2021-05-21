import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcareermodalComponent } from './addcareermodal.component';

describe('AddcareermodalComponent', () => {
  let component: AddcareermodalComponent;
  let fixture: ComponentFixture<AddcareermodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcareermodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcareermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
