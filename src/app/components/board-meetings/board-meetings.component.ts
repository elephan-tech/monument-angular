import { Component, ViewChild, Input } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-board-meetings',
  templateUrl: './board-meetings.component.html',
  styleUrls: ['./board-meetings.component.scss'],
})

export class BoardMeetingsComponent {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() boardMeetings: any;
  @Input() meetingName: string;
}
