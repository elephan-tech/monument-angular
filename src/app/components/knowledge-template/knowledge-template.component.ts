import { Tab } from './../../models/knowledge';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-knowledge-template',
  templateUrl: './knowledge-template.component.html',
  styleUrls: ['./knowledge-template.component.scss'],
})
export class KnowledgeTemplateComponent implements OnInit {
  currentSegment: number;
  isCurrentSegment: boolean;
  @Input() title: string;
  @Input() image: string;
  @Input() description: string;
  @Input() mainContent: string;
  @Input() tabs: Tab[];

  constructor() {}

  ngOnInit(): void {
    this.currentSegment = 0;
    this.isCurrentSegment = true;
  }

  segmentChanged(event) {
    this.currentSegment = event.detail.value.split('-')[2];
  }
}
