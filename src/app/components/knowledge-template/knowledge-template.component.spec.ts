import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KnowledgeTemplateComponent } from './knowledge-template.component';

describe('KnowledgeTemplateComponent', () => {
  let component: KnowledgeTemplateComponent;
  let fixture: ComponentFixture<KnowledgeTemplateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
