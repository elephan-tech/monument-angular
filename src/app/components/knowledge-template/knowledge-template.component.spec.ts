import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeTemplateComponent } from './knowledge-template.component';

describe('KnowledgeTemplateComponent', () => {
  let component: KnowledgeTemplateComponent;
  let fixture: ComponentFixture<KnowledgeTemplateComponent>;

  beforeEach(async(() => {
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
